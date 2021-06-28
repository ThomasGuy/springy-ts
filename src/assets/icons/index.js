import { BurgerIcon, MenuBurgerIcon, LogoIcon } from './icons-svg';

function Icon(props) {
  switch (props.symbol) {
    case 'hamburger':
      return <BurgerIcon />;
    case 'menuburger':
      return <MenuBurgerIcon />;
    case 'logo':
      return <LogoIcon />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
