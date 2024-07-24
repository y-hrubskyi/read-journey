import styled from 'styled-components';

export const BasePageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};
  width: 100%;
  padding: ${p => p.theme.spacing(10)} ${p => p.theme.spacing(5)};

  background-color: ${p => p.theme.colors.primaryBg};
  border-radius: ${p => p.theme.radii.wrapper};

  @media screen and (min-width: 768px) {
    padding: ${p => p.theme.spacing(10)};
  }
`;

export const BookListPageContent = styled(BasePageContent)`
  min-height: 382px;

  @media screen and (min-width: 768px) {
    min-height: 663px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 374px) {
    gap: ${p => p.theme.spacing(3)};
    flex-wrap: wrap;
  }
`;

export const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14286;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
