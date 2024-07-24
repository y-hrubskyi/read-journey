import styled from 'styled-components';

import { InfoTitle } from '@/components/common/Dashboard/InfoBlock.styled';

export const DetailsTitle = styled(InfoTitle)``;

export const InfoBlock = styled.div`
  width: 100%;
`;

export const InfoBlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${p => p.theme.spacing(5)};
  }
`;
