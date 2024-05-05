import { Icons } from "@/config/icons";

import * as SC from "./Logo.styled";

export const Logo = () => {
  return (
    <SC.Logo to="/">
      <SC.LogoIcon>
        <use href={Icons.logo}></use>
      </SC.LogoIcon>
      <SC.LogoText>READ JOURNEY</SC.LogoText>
    </SC.Logo>
  );
};
