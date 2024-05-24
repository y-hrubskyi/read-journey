import styled from "styled-components";

export const BaseFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(2)};

  @media screen and (min-width: 768px) {
    gap: ${(p) => p.theme.spacing(3.5)};
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 14px;
  left: 14px;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    top: 16px;

    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const BaseInput = styled.input`
  width: 100%;
  padding-top: ${(p) => p.theme.spacing(3.25)};
  padding-right: ${(p) => p.theme.spacing(10.75)};
  padding-bottom: ${(p) => p.theme.spacing(3.25)};

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primaryText};

  background-color: ${(p) => p.theme.colors.secondaryBg};
  outline: transparent;
  border-radius: ${(p) => p.theme.radii.field};
  border: 1px solid
    ${(p) => {
      if (p["data-is-correct"]) {
        return p.theme.colors.green;
      }

      if (p["data-has-error"]) {
        return p.theme.colors.red;
      }

      return "transparent";
    }};

  transition: ${(p) => p.theme.transition("border-color")};

  &:hover,
  &:focus {
    border-color: rgba(249, 249, 249, 0.1);
  }

  @media screen and (min-width: 768px) {
    padding-top: ${(p) => p.theme.spacing(3.75)};
    padding-right: ${(p) => p.theme.spacing(11.75)};
    padding-bottom: ${(p) => p.theme.spacing(3.75)};

    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const BaseValidInputIcon = styled.svg`
  position: absolute;
  top: 13px;
  right: 16px;

  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 18px;

    width: 20px;
    height: 20px;
  }
`;

export const CorrectIcon = styled(BaseValidInputIcon)`
  fill: ${(p) => p.theme.colors.green};
`;

export const ErrorIcon = styled(BaseValidInputIcon)`
  fill: ${(p) => p.theme.colors.red};
`;

export const BaseValidationMessage = styled.p`
  margin-top: ${(p) => p.theme.spacing(1)};
  margin-left: ${(p) => p.theme.spacing(3.5)};

  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-top: ${(p) => p.theme.spacing(2)};

    font-size: 12px;
    line-height: 1.16667;
  }
`;

export const CorrectMessage = styled(BaseValidationMessage)`
  color: ${(p) => p.theme.colors.green};
`;

export const ErrorMessage = styled(BaseValidationMessage)`
  color: ${(p) => p.theme.colors.red};
`;
