import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2.5)};

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;
