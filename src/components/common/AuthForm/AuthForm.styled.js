import styled from "styled-components";
import { Link } from "react-router-dom";

import { BaseInput } from "@/components/common/FormField/FormField.styled";

export const NameInput = styled(BaseInput)`
  padding-left: ${(p) => p.theme.spacing(14.5)};

  @media screen and (min-width: 768px) {
    padding-left: ${(p) => p.theme.spacing(16)};
  }
`;

export const EmailInput = styled(BaseInput)`
  padding-left: ${(p) => p.theme.spacing(12)};

  @media screen and (min-width: 768px) {
    padding-left: ${(p) => p.theme.spacing(13)};
  }
`;

export const PasswordInput = styled(BaseInput)`
  padding-left: ${(p) => p.theme.spacing(19.25)};
  padding-right: ${(p) => p.theme.spacing(17.75)};

  @media screen and (min-width: 768px) {
    padding-left: ${(p) => p.theme.spacing(21.25)};
    padding-right: ${(p) => p.theme.spacing(19.25)};
  }
`;

export const AuthSubmitBtn = styled.button`
  margin-right: ${(p) => p.theme.spacing(3.5)};
  padding: ${(p) => p.theme.spacing(2.75)} ${(p) => p.theme.spacing(6.75)};

  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.colors.primaryBg};

  background-color: ${(p) => p.theme.colors.primaryText};
  border-radius: ${(p) => p.theme.radii.btn};
  border: 1px solid ${(p) => p.theme.colors.primaryText};

  transition: ${(p) => p.theme.transition("color")},
    ${(p) => p.theme.transition("background-color")},
    ${(p) => p.theme.transition("border-color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.primaryText};

    background-color: ${(p) => p.theme.colors.pageBg};
    border-color: rgba(249, 249, 249, 0.2);
  }

  @media screen and (min-width: 768px) {
    margin-right: ${(p) => p.theme.spacing(5)};
    padding: ${(p) => p.theme.spacing(3.75)} ${(p) => p.theme.spacing(13.25)};

    font-size: 20px;
    line-height: 1;
  }
`;

export const AuthPageLink = styled(Link)`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  text-decoration-skip-ink: none;
  color: ${(p) => p.theme.colors.secondaryText};

  transition: ${(p) => p.theme.transition("color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.primaryText};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;
