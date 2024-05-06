import styled from "styled-components";

export const BaseContainer = styled.div`
  margin: 0 auto;
  padding: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: ${(p) => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
