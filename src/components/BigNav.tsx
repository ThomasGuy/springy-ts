import React, { AriaRole } from 'react';
import styled from 'styled-components';
import { A } from 'hookrouter';
import { mediaQuery } from './styles/mediaQuery';

interface Columns {
  cols: number;
  roll: AriaRole;
}

const Navbar = styled.nav<Columns>`
  display: none;
  place-items: center center;
  gap: 2rem;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
  grid-template-rows: auto;
  padding: 1rem;
  background: #dbaa4e;
  border-bottom: 2px solid var(--black);
  box-shadow: var(--bs);
  margin-bottom: 3.4rem;
  grid-column: 1 / -1;
  width: 100%;

  ${mediaQuery('md')`
    display: grid;
  `};
`;

const Title = styled.h1`
  text-align: center;
  grid-column: 1 / -1;
  text-shadow: var(--bs);
  font-weight: 900;
`;

const NavLink = styled(A)`
  display: grid;
  place-content: center center;
  text-decoration: none;
  padding: 0 1rem;
  max-width: 18rem;
  width: 100%;
  background: var(--yellow);
  border: 2px solid var(--black);
  border-radius: 20px;
  line-height: 2;
  box-shadow: var(--bs);
  font-weight: 600;
`;

interface BignavProps {
  title: string;
}

const BigNav: React.FC<BignavProps> = ({ title }) => (
  <Navbar cols={3} id="navigation" aria-labelledby="site-navigation" roll="menu">
    <Title>{title}</Title>
    <NavLink role="menuitem" href="/">
      Home
    </NavLink>
    <NavLink role="menuitem" href="/springs">
      Springs
    </NavLink>
    <NavLink role="menuitem" href="/boo/ga/loo">
      Boo-Ga-Loo
    </NavLink>
  </Navbar>
);

export default BigNav;
