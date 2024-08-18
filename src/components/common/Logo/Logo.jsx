import { Icons } from '~/config/icons';

import * as SC from './Logo.styled';

export const Logo = ({ isPrivateLayout }) => {
  return (
    <SC.Logo to="/" aria-label="read journey logo">
      <SC.LogoIcon>
        <use href={Icons.logo}></use>
      </SC.LogoIcon>
      <SC.LogoText data-is-private={isPrivateLayout}>READ JOURNEY</SC.LogoText>
    </SC.Logo>
  );
};
