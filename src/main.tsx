import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './components/styles/GlobalStyles';

import App from './components/App';
import { BreakpointProvider } from './hooks/useBreakpoint';

const queries: { [key: string]: string } = {
  // xs: '(max-width: 320px)',
  // sm: '(max-width: 480px)',
  md: '(max-width: 668px)',
  // or: '(orientation: portrait)', // we can check orientation also
  galleryMd: '(min-width: 468px)',
  galleryLg: '(min-width: 910px)',
  span: '(min-width: 580px)',
};

ReactDOM.render(
  <>
    <GlobalStyles />
    <BreakpointProvider queries={queries}>
      <App />
    </BreakpointProvider>
  </>,
  document.getElementById('root'),
);
