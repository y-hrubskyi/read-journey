import styled from 'styled-components';

import { BaseDashboard } from '~/components/common/Dashboard/Dashboard.styled';

export const Dashboard = styled(BaseDashboard)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${p => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    gap: ${p => p.theme.spacing(5)};
  }
`;
