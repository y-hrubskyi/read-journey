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
  padding: ${(p) => p.theme.spacing(3.25)};

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.primaryText};

  background-color: ${(p) => p.theme.colors.secondaryBg};
  border: 1px solid ${(p) => p.theme.colors.secondaryBg};
  border-radius: ${(p) => p.theme.radii.field};
  outline: transparent;

  transition: ${(p) => p.theme.transition("border-color")};

  &:hover,
  &:focus {
    border-color: rgba(249, 249, 249, 0.1);
  }

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(3.75)};

    font-size: 14px;
    line-height: 1.28571;
  }
`;
