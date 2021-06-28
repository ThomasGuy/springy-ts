/* eslint-disable @typescript-eslint/restrict-template-expressions */
import styled from 'styled-components';
import { mediaQuery } from './mediaQuery';

interface GridProps {
  cols?: number;
  span?: number;
  height?: string;
}

export const Grid = styled.div<GridProps>`
  padding: 1.4rem;
  display: grid;
  background: #ebd3a8;
  gap: 1rem;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
  grid-auto-rows: max-content;

  ${mediaQuery('sm')`
    gap: 2rem;
`};
`;

export const Row = styled.div<GridProps>`
  display: grid;
  place-items: center center;
  gap: 1rem;
  grid-column: 1 / -1;
  grid-template-columns: ${({ cols }) =>
    cols ? `repeat(${cols}, 1fr)` : '1fr'};
  justify-content: center;
  height: ${props => props.height || `auto`};
  background: #ebd3a8;
`;

export const Col = styled.div<GridProps>`
  display: grid;
  place-items: center center;
  grid-column: ${({ span }) => `span ${span}` || 'span 1'};
  height: ${props => props.height || `100%`};
  background: yellowgreen;
  width: 100%;
`;
