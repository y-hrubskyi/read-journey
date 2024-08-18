import styled from 'styled-components';

import BooksIMG from '~/assets/img/books.webp';

export const PlaceholderWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(2.5)};
  height: 100%;

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(5)};
  }
`;

export const PlaceholderImg = styled.div`
  width: 100px;
  height: 100px;

  background-color: ${p => p.theme.colors.secondaryBg};
  background-image: url(${BooksIMG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px 50px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 130px;

    background-size: 70px 70px;
  }
`;

export const PlaceholderText = styled.p`
  max-width: 197px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${p => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    max-width: 274px;
  }
`;

export const DarkenedText = styled.span`
  color: ${p => p.theme.colors.secondaryText};
`;
