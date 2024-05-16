import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoWrapper = styled.div`
  padding: ${(p) => p.theme.spacing(5)};
  width: 100%;

  background-color: ${(p) => p.theme.colors.secondaryBg};
  border-radius: 12px;
`;

export const InfoTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const AnotherPageLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AnotherPageLink = styled(Link)`
  align-self: end;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${(p) => p.theme.colors.secondaryText};

  transition: ${(p) => p.theme.transition("color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.primaryText};
  }
`;

export const AnotherPageLinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  color: ${(p) => p.theme.colors.primaryText};
`;

export const ArrowIcon = styled.svg`
  stroke: currentColor;
`;
