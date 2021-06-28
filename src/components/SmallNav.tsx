import React, { useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { A } from 'hookrouter';
import { GiHamburgerMenu } from 'react-icons/gi';
import { mediaQuery } from './styles/mediaQuery';
import useDetectOutsideClick from '../hooks/useDetectOutsideClick';
import { ariaExpanded } from '../utils/helpers';
import { Roll } from '../typings/interfaces';

const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  place-items: center center;
  gap: 2rem;
  padding: 1rem;
  background: #dbaa4e;
  border-bottom: 2px solid var(--black);
  margin-bottom: 2.4rem;
  width: 100%;

  ${mediaQuery('md')`
    display: none;
  `};

  .title {
    grid-column: 1 / -2;
  }
`;

const Title = styled.h1`
  text-align: center;
  text-shadow: var(--bs);
`;

const NavButton = styled.button`
  position: relative;
  background: #dbaa4e;
  outline: none;
  border: none;
  cursor: pointer;

  svg {
    fill: inherit;
    height: 34px;
    width: 34px;
  }
`;

const Dropdown = styled(animated.ul)<Roll>`
  position: absolute;
  z-index: 5;
  top: 6rem;
  left: 2rem;
  font-size: 1.7rem;
  font-weight: 600;
  display: grid;
  gap: 1rem;
  list-style: none;
  background: #dbaa4e;
  border-radius: 1.5rem;
  border: 2px solid var(--black);
  box-shadow: var(--bs);
  padding: 1rem;
`;

const NavLink = styled(A)`
  display: grid;
  place-items: center center;
  width: 15rem;
  height: 3rem;
  background: var(--yellow); // wesbos  yellow
  border-radius: 1rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);

  text-decoration: none;
  color: rgba(12, 12, 12, 0.85);
  font-weight: bold;

  &:focus,
  &:hover {
    background: white;
  }
`;

interface SmallNavProps {
  title: string;
}

const SmallNav: React.FC<SmallNavProps> = ({ title }) => {
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useDetectOutsideClick(dropdownRef, false);

  const config = { mass: 40, tension: 30, friction: 96 };

  const handleMenu = (evt: MouseEvent) => {
    const but = evt.currentTarget! as HTMLButtonElement;
    ariaExpanded(but);
    setOpen(state => !state);
  };

  // abit of animation for thr non visually impared
  const springProps = useSpring({
    opacity: open ? 1 : 0,
    scaleY: open ? 1 : 0.5,
    transform: open ? 'translate3d(0, 0, 0)' : 'translate3d(-10rem, -20rem, 0)',
    ...config,
  });

  return (
    <Navbar>
      <Title>{title}</Title>
      <NavButton
        id="menu-button"
        onClick={handleMenu}
        type="button"
        aria-label="menu button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="menu-list">
        <GiHamburgerMenu aria-hidden="true" />
      </NavButton>
      {open && (
        <Dropdown
          ref={dropdownRef}
          id="menu-list"
          roll="menu"
          style={{ ...springProps }}>
          <NavLink role="menuitem" href="/">
            Home
          </NavLink>
          <NavLink role="menuitem" href="/about">
            About
          </NavLink>
          <NavLink role="menuitem" href="/springs">
            Springs
          </NavLink>
          <NavLink role="menuitem" href="/contact">
            Contact
          </NavLink>
        </Dropdown>
      )}
    </Navbar>
  );
};

export default SmallNav;
