import React, { useState, useEffect, createContext, useContext } from 'react';

type MediaQueryObject = { [media: string]: boolean };

const defaultValue: MediaQueryObject = {};

const BreakpointContext = createContext(defaultValue);

interface BreakpointProps {
  children: React.ReactNode;
  queries: { [key: string]: string };
}

const BreakpointProvider: React.FC<BreakpointProps> = ({ children, queries }) => {
  const [queryMatch, setQueryMatch] = useState<MediaQueryObject>({});

  useEffect(() => {
    const mediaQueryLists: { [media: string]: MediaQueryList } = {};
    const keys = Object.keys(queries);
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc: MediaQueryObject, media: string) => {
        acc[media] = !!mediaQueryLists[media]?.matches;
        return acc;
      }, {});
      setQueryMatch(updatedMatches);
    };

    if (window?.matchMedia) {
      const matches: MediaQueryObject = {};
      keys.forEach(media => {
        mediaQueryLists[media] = window.matchMedia(queries[media]);
        matches[media] = mediaQueryLists[media].matches;
      });
      setQueryMatch(matches);
      isAttached = true;
      keys.forEach(media => {
        mediaQueryLists[media].addListener(handleQueryListener);
      });
    }

    return () => {
      if (isAttached) {
        keys.forEach(media => {
          mediaQueryLists[media].removeListener(handleQueryListener);
        });
      }
    };
  }, [queries]);

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  );
};

function useBreakpoint() {
  const context = useContext(BreakpointContext);
  if (context === defaultValue) {
    throw new Error('useBreakpoint must be used within BreakpointProvider');
  }
  return context;
}

export { useBreakpoint, BreakpointProvider };
