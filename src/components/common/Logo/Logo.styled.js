import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(1)};

  color: currentColor;
  text-decoration: none;
`;

export const LogoIcon = styled.svg`
  width: 42px;
  height: 17px;

  fill: currentColor;
`;

export const LogoText = styled.p`
  display: none;

  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
