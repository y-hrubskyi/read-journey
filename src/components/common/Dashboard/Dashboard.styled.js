import styled from "styled-components";

export const Dashboard = styled.div`
  padding: ${(p) => p.theme.spacing(5)};
  width: 100%;

  background-color: ${(p) => p.theme.colors.primaryBg};
  border-radius: ${(p) => p.theme.radii.wrapper};

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1280px) {
    flex-shrink: 0;
    padding-top: ${(p) => p.theme.spacing(10)};
    padding-right: ${(p) => p.theme.spacing(5)};
    padding-bottom: ${(p) => p.theme.spacing(5)};
    padding-left: ${(p) => p.theme.spacing(5)};
    width: 353px;
  }
`;
