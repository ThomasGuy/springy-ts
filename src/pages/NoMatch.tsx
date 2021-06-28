import React from 'react';
import styled from 'styled-components';
import { A } from 'hookrouter';
import { Grid, Row } from '../components/styles/responsive-layout';
import Nav from '../components/Nav';

const Msg = styled.div`
  min-height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NoMatch: React.FC = () => (
  <Grid>
    <Row>
      <Nav title="404 - Page not found" />
    </Row>
    <Row>
      <Msg>
        <h3>Boo hoo</h3>
        <br />
        <A href="/">Go Home</A>
      </Msg>
    </Row>
  </Grid>
);

export default NoMatch;

// No match for <code>{location.pathname}</code>
