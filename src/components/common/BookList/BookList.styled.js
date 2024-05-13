import styled from "styled-components";

export const BookList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    justify-content: start;
    column-gap: ${(p) => p.theme.spacing(6.25)};
    row-gap: ${(p) => p.theme.spacing(6.75)};
  }

  @media screen and (min-width: 1280px) {
    column-gap: ${(p) => p.theme.spacing(5)};
  }
`;
