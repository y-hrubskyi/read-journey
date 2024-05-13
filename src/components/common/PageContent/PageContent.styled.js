import styled from "styled-components";

export const PageContent = styled.div`
  padding: ${(p) => p.theme.spacing(10)} ${(p) => p.theme.spacing(5)};
  width: 100%;

  background-color: ${(p) => p.theme.colors.primaryBg};
  border-radius: ${(p) => p.theme.radii.wrapper};

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(10)};
  }
`;

export const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14286;
  }
`;
