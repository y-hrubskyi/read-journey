import styled from 'styled-components';

import { BaseInput } from '~/components/common/FormField/FormField.styled';

export const Form = styled.form`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    width: 295px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
`;

export const FormTitle = styled.p`
  margin-left: ${p => p.theme.spacing(3.5)};

  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const SubmitBtn = styled.button`
  align-self: start;
  padding: ${p => p.theme.spacing(2.25)} ${p => p.theme.spacing(4.75)};

  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.primaryText};

  background-color: transparent;
  border: 1px solid ${p => p.theme.colors.btnBorder};
  border-radius: ${p => p.theme.radii.btn};

  transition: ${p => p.theme.transition('color')},
    ${p => p.theme.transition('border-color')},
    ${p => p.theme.transition('background-color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primaryBg};

    background-color: ${p => p.theme.colors.primaryText};
    border-color: ${p => p.theme.colors.primaryText};
  }

  @media screen and (min-width: 768px) {
    padding: ${p => p.theme.spacing(2.75)} ${p => p.theme.spacing(6.75)};

    font-size: 16px;
    line-height: 1.125;
  }
`;

export const TitleInput = styled(BaseInput)`
  padding-left: ${p => p.theme.spacing(19)};

  @media screen and (min-width: 768px) {
    padding-left: ${p => p.theme.spacing(21.25)};
  }
`;

export const AuthorInput = styled(BaseInput)`
  padding-left: ${p => p.theme.spacing(21)};

  @media screen and (min-width: 768px) {
    padding-left: ${p => p.theme.spacing(23.5)};
  }
`;
