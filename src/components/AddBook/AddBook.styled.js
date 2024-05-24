import styled from "styled-components";

import { BaseInput } from "@/components/common/FormField/FormField.styled";

export const PagesInput = styled(BaseInput)`
  padding-left: ${(p) => p.theme.spacing(30.5)};

  @media screen and (min-width: 768px) {
    padding-left: ${(p) => p.theme.spacing(33.5)};
  }
`;
