import sprite from "@/assets/icons/sprite.svg";

import * as SC from "./Logo.styled";

export const Logo = () => {
  return (
    <SC.Logo to="/">
      <SC.LogoIcon>
        <use href={sprite + "#icon-logo"}></use>
      </SC.LogoIcon>
      <SC.LogoText>READ JOURNEY</SC.LogoText>
    </SC.Logo>
  );
};
