import styled from 'styled-components';

import { BaseFieldsWrapper } from '@/components/common/FormField/FormField.styled';

export const FieldsWrapper = styled(BaseFieldsWrapper)`
  margin-bottom: ${p => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.spacing(20.5)};
  }
`;
