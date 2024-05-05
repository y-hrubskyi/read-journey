import * as SC from "./Logo.styled";

export const Logo = () => {
  return (
    <SC.Logo to="/">
      <SC.LogoIcon>
        <use
          href={new URL("@/assets/icons/sprite.svg#icon-logo", import.meta.url)}
        ></use>
      </SC.LogoIcon>
      <SC.LogoText>READ JOURNEY</SC.LogoText>
    </SC.Logo>
  );
};
