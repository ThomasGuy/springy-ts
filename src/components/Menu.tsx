/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import Burger from '../assets/menu_burgeere_icon.svg';
import { Roll } from '../typings/interfaces';
import { mediaQuery } from './styles/mediaQuery';

const Navbar = styled.nav`
  position: relative;
  // for IE why bother ??
  [hidden] {
    display: none;
  }

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  svg {
    height: 34px;
    width: 34px;

    ${mediaQuery('md')`
      height: 44px;
      width: 44px;
    `};
  }
`;

const Dropdown = styled(animated.ul)<Roll>`
  position: absolute;
  top: 6rem;
  left: -10rem;
  display: grid;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  list-style: none;
  background: #dbaa4e;
  border-radius: 1.5rem;
  border: 2px solid var(--black);
  box-shadow: var(--bs);
  padding: 1rem;
  z-index: 5;
`;

const Li = styled.li`
  text-align: center;
  width: 15rem;
  height: 3rem;
  background: var(--yellow); // wesbos  yellow
  border-radius: 1rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  a {
    text-decoration: none;
    color: rgba(12, 12, 12, 0.85);
    font-weight: bold;
  }
  &:focus,
  &:hover {
    background: white;
  }
`;

function Menu(): React.ReactNode {
  const [open, setOpen] = useState(false);

  function handleMenu(evt: MouseEvent) {
    const target = evt.target as HTMLElement;
    const expanded: boolean =
      target.getAttribute('aria-expanded') === 'true' || false;
    target.setAttribute('aria-expanded', (!expanded).toString());
    const menu = document.querySelector('#menu-list') as HTMLElement;
    menu.hidden = !menu.hidden;
    setOpen(state => !state);
  }

  useEffect(() => {
    const navButton = document.querySelector('nav button')!;
    navButton.addEventListener('click', handleMenu);

    return () => navButton.removeEventListener('click', handleMenu);
  }, []);

  // abit of animation for thr non visually impared
  const config = { mass: 20, tension: 100, friction: 76 };
  const springProps = useSpring({
    opacity: open ? 1 : 0,
    ...config,
  });

  return (
    <Navbar id="navigation" aria-labelledby="site-navigation">
      <button
        id="menu-button"
        onClick={() => handleMenu}
        aria-label="menu button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="menu-list">
        <Burger aria-hidden="true" />
      </button>
      <Dropdown hidden id="menu-list" roll="menu" style={{ ...springProps }}>
        <Li autoFocus>
          <a role="menuitem" href="/">
            Home
          </a>
        </Li>
        <Li>
          <a role="menuitem" href="/about">
            About
          </a>
        </Li>
        <Li>
          <a role="menuitem" href="/springs">
            Springs
          </a>
        </Li>
        <Li>
          <a role="menuitem" href="/contact">
            Contact
          </a>
        </Li>
      </Dropdown>
    </Navbar>
  );
}

export default Menu;
