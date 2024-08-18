import styled from 'styled-components';

import PreviewIMG from '~/assets/img/preview.webp';

import { BaseContainer } from '~/components/common/Layout/Layout.styled';

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2.5)};

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: ${p => p.theme.spacing(4)};
  }
`;

export const ContentWrapper = styled.div`
  padding-top: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(10)};
  padding-left: ${p => p.theme.spacing(5)};

  background-color: ${p => p.theme.colors.primaryBg};
  border-radius: ${p => p.theme.radii.wrapper};

  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.spacing(10)};
    padding-right: ${p => p.theme.spacing(42)};
    padding-bottom: ${p => p.theme.spacing(53.5)};
    padding-left: ${p => p.theme.spacing(16)};
  }

  @media screen and (min-width: 1280px) {
    flex: 1;
    padding: ${p => p.theme.spacing(10)} ${p => p.theme.spacing(16)};
  }
`;

export const FormWrapper = styled(ContentWrapper)``;

export const SloganHeading = styled.p`
  margin-top: ${p => p.theme.spacing(10)};
  margin-bottom: ${p => p.theme.spacing(5)};

  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  letter-spacing: 0.02em;

  @media screen and (min-width: 768px) {
    margin-top: ${p => p.theme.spacing(39)};
    margin-bottom: ${p => p.theme.spacing(10)};
    max-width: 444px;

    font-size: 64px;
    line-height: 0.9375;
  }

  @media screen and (min-width: 1280px) {
    margin-top: ${p => p.theme.spacing(27)};
  }
`;

export const DarkenedText = styled.span`
  color: rgba(227, 227, 227, 0.5);
`;

export const PreviewWrapper = styled(ContentWrapper)`
  height: 351px;

  background-image: url(${PreviewIMG});
  background-repeat: no-repeat;
  background-position: center top 20px;
  background-size: 255px auto;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    height: auto;

    background-size: 405px auto;
    background-position: center bottom 0;
  }
`;
