import styled from "styled-components";

import { BaseFieldsWrapper } from "@/components/common/FormField/FormField.styled";
import { AuthSubmitBtn } from "@/components/common/AuthForm/AuthForm.styled";

export const FieldsWrapper = styled(BaseFieldsWrapper)`
  margin-bottom: ${(p) => p.theme.spacing(18)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${(p) => p.theme.spacing(36.5)};
  }
`;

export const LoginSubmitBtn = styled(AuthSubmitBtn)`
  @media screen and (max-width: 767px) {
    padding-right: ${(p) => p.theme.spacing(11)};
    padding-left: ${(p) => p.theme.spacing(11)};
  }
`;
