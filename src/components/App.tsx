/* eslint-disable react/display-name */
import {useRoutes} from 'hookrouter';
import React from 'react';
import styled from 'styled-components';
import Home from '../pages/Home';

import NoMatch from '../pages/NoMatch';
import Springs from '../pages/Springs';

import { mediaQuery } from './styles/mediaQuery';

const Layout = styled.div`
  background: #ebd3a8;
  min-height: 100vh;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 0.5rem 0.5rem;

  ${mediaQuery('sm')`
    padding: 0 1.4rem 1.4rem;
`};
`;

type MyRoutes = {
  [key: string]: () => React.ReactElement;
};

const Routes: MyRoutes = {
  '/': () => <Home />,
  '/springs': () => <Springs />,
};

const App: React.FC = () => {
  const routeResult = useRoutes(Routes);
  return <Layout>{routeResult || <NoMatch />}</Layout>;
};

export default App;
