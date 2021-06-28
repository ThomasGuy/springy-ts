import { useState, useEffect, RefObject, Dispatch, SetStateAction } from 'react';

import { ariaExpanded } from '../utils/helpers';

const useDetectOutsideClick = (
  el: RefObject<HTMLElement>,
  initialState: boolean,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (evt: MouseEvent) => {
      // If the active element exists and is clicked outside of
      const target = evt.target as HTMLElement;
      if (
        el.current !== null &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        (!el.current.contains(target) || target.nodeName === 'A')
      ) {
        setIsActive(state => !state);
        ariaExpanded(document.querySelector('#menu-button')!);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
      // console.log('active');
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
      // console.log('not active');
    };
  }, [el, isActive]);

  return [isActive, setIsActive];
};

export default useDetectOutsideClick;
