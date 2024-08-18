import styled from 'styled-components';

import { BaseInput } from '~/components/common/FormField/FormField.styled';

export const PageInput = styled(BaseInput)`
  padding-left: ${p => p.theme.spacing(24.5)};

  @media screen and (min-width: 768px) {
    padding-left: ${p => p.theme.spacing(27.5)};
  }
`;
