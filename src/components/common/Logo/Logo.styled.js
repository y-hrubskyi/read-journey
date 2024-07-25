import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
  justify-self: start;

  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};

  color: currentColor;
  text-decoration: none;
`;

export const LogoIcon = styled.svg`
  width: 42px;
  height: 17px;

  fill: currentColor;
`;

export const LogoText = styled.span`
  display: none;

  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    display: ${p => (p['data-is-private'] ? 'none' : 'block')};
  }

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;
