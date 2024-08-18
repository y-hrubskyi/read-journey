import styled from 'styled-components';

import StarIMG from '~/assets/img/star.webp';

import { InfoTitle } from '~/components/common/Dashboard/InfoBlock.styled';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    min-height: 272px;
  }
`;

export const ProgressTitle = styled(InfoTitle)`
  margin-bottom: ${p => p.theme.spacing(3.5)};
`;

export const ProgressDescription = styled.p`
  margin-bottom: ${p => p.theme.spacing(5)};

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.spacing(12.5)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${p => p.theme.spacing(15)};
  }
`;

export const StarWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;

  background-color: ${p => p.theme.colors.secondaryBg};
  border-radius: 100%;
  background-image: url(${StarIMG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 32px 32px;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;

    background-size: 50px 50px;
  }
`;
