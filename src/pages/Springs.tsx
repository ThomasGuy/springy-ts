import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animated, useTrail } from 'react-spring';

import { Grid, Row } from '../components/styles/responsive-layout';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { mediaQuery } from '../components/styles/mediaQuery';
import Nav from '../components/Nav';
import { addClass } from '../utils/helpers';

// staic image imports
import Image1 from '../assets/images/week10/Sally3.jpg';
import Image2 from '../assets/images/week10/Charles.jpg';
import Image3 from '../assets/images/week10/Gil.jpg';
import Image4 from '../assets/images/week10/Jan.jpg';
import Image5 from '../assets/images/week10/Jan2.jpg';
import Image6 from '../assets/images/week10/Margaret.jpg';
import Image7 from '../assets/images/week10/Margaret2.jpg';
import Image8 from '../assets/images/week10/Margot.jpg';
import Image9 from '../assets/images/week10/Margot2.jpg';
import Image10 from '../assets/images/week10/Sally.jpg';
import Image11 from '../assets/images/week10/Sally2.jpg';
import Image13 from '../assets/images/week10/Judy.jpg';
import Image12 from '../assets/images/week10/Suzanne.jpg';
import Image14 from '../assets/images/week10/Charles2.jpg';
import Image15 from '../assets/images/week10/Gil2.jpg';
import Image16 from '../assets/images/week10/Jan3.jpg';
import Image17 from '../assets/images/week10/Margot3.jpg';
import Image18 from '../assets/images/week10/Judy2.jpg';
import Image19 from '../assets/images/wide/Sallyw2.jpg';
import Image20 from '../assets/images/wide/Sallyw1.jpg';
import Image21 from '../assets/images/wide/peonies.jpg';
import Image22 from '../assets/images/wide/Sallyt1.jpg';
import Image23 from '../assets/images/wide/Jantt1.jpg';
import Image24 from '../assets/images/wide/Suzannew1.jpg';

const PictureBox = styled(animated.div)`
  max-width: 80rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-fit: contain; */
  }
`;

interface ContainerProps {
  width: number;
  span: number;
}

const Container = styled.div<ContainerProps>`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: ${({ width }) => `repeat(auto-fit, minmax(${width}rem, 1fr))`};
  /* grid-auto-rows: max-content; */
  grid-auto-flow: dense;

  .tall2 {
    grid-row: span 2;
  }

  .wide2 {
    grid-column: span 2;
  }

  .wide3 {
    grid-column: ${({ span }) => `span ${span}`};
  }

  ${mediaQuery('sm')`
    gap: 0.5rem;
 `};
`;

const images: [string, number][] = [
  [Image19, 2.5],
  [Image1, 0.4],
  [Image2, 1.0],
  [Image3, 1.0],
  [Image4, 1.0],
  [Image5, 1.0],
  [Image22, 0.4],
  [Image6, 1.0],
  [Image7, 1.0],
  [Image23, 0.4],
  [Image8, 1.0],
  [Image9, 1.0],
  [Image10, 1.0],
  [Image19, 2.5],
  [Image11, 1.0],
  [Image12, 1.5],
  [Image13, 1.5],
  [Image14, 1.0],
  [Image24, 1.5],
  [Image15, 1.0],
  [Image21, 2.5],
  [Image16, 1.0],
  [Image17, 1.0],
  [Image18, 1.5],
  [Image20, 2.5],
];

const Springs: React.FC = () => {
  const [span, setSpan] = useState(2);
  const [width, setWidth] = useState(14);
  const breakpoints = useBreakpoint();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    breakpoints.span ? setSpan(3) : setSpan(2);
    if (breakpoints.galleryMd) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      breakpoints.galleryLg ? setWidth(20) : setWidth(18);
    } else {
      setWidth(14);
    }
  }, [breakpoints]);

  const trail = useTrail(images.length, {
    opacity: 1,
    scale: 1,
    from: { opacity: 0, scale: 0.3 },
  });

  return (
    <Grid>
      <Row>
        <Nav title="Springy!" />
      </Row>
      <Row>
        <Container width={width} span={span}>
          {trail.map(({ opacity, scale, ...rest }, idx) => {
            const ratio = images[idx][1];
            const key = idx;
            return (
              <PictureBox
                key={key}
                className={addClass(ratio)}
                style={{ opacity, scale, ...rest }}>
                <img src={images[idx][0]} alt="tom" />
              </PictureBox>
            );
          })}
        </Container>
      </Row>
    </Grid>
  );
};

export default Springs;
