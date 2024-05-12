import styled from "styled-components";

import { BaseInput } from "@/components/common/FormField/FormField.styled";

export const TitleInput = styled(BaseInput)`
  padding-left: ${(p) => p.theme.spacing(19)};

  @media screen and (min-width: 768px) {
    padding-left: ${(p) => p.theme.spacing(21.25)};
  }
`;

export const AuthorInput = styled(BaseInput)`
  padding-left: ${(p) => p.theme.spacing(21)};

  @media screen and (min-width: 768px) {
    padding-left: ${(p) => p.theme.spacing(23.5)};
  }
`;
