import React, { FC } from 'react';

import BigNav from './BigNav';
import SmallNav from './SmallNav';

interface TitleProps {
  title: string;
}

const Nav: FC<TitleProps> = ({ title }) => (
  <>
    <SmallNav title={title} />
    <BigNav title={title} />
  </>
);

export default Nav;
