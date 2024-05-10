import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  justify-self: center;

  @media screen and (max-width: 767px) {
    align-self: end;
    justify-self: center;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${(p) => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1280px) {
    gap: ${(p) => p.theme.spacing(10)};
  }
`;

export const NavLink = styled(Link)`
  display: block;
  padding-bottom: ${(p) => p.theme.spacing(0.625)};

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryText};
  text-decoration: none;

  transition: ${(p) => p.theme.transition("color")};

  &::after {
    content: "";
    position: relative;
    left: -1.5px;
    bottom: -4px;

    display: block;
    width: calc(100% + 3px);
    height: 3px;

    background-color: transparent;
    border-radius: 8px;
    pointer-events: none;

    transition: ${(p) => p.theme.transition("background-color")};

    @media screen and (min-width: 768px) {
      bottom: -8px;
    }
  }

  &.active,
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.primaryText};
  }

  &.active {
    &::after {
      background-color: ${(p) => p.theme.colors.accent};
    }
  }

  @media screen and (min-width: 768px) {
    padding-bottom: ${(p) => p.theme.spacing(1.625)};

    font-size: 16px;
    line-height: 1.125;
  }
`;
