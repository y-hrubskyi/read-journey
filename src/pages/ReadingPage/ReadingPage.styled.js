import styled from 'styled-components';

import { BaseDashboard } from '@/components/common/Dashboard/Dashboard.styled';
import { BasePageContent } from '@/components/common/PageContent/PageContent.styled';

export const Dashboard = styled(BaseDashboard)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${p => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    gap: ${p => p.theme.spacing(10)};
  }
`;

export const BookReadingPageContent = styled(BasePageContent)`
  gap: ${p => p.theme.spacing(10)};
  min-height: 471px;

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(8)};
    min-height: 518px;
  }

  @media screen and (min-width: 1280px) {
    gap: ${p => p.theme.spacing(11)};
    min-height: 651px;
  }
`;

export const ReadingTime = styled.p`
  align-self: self-start;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;
