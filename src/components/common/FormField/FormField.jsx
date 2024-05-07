import * as SC from "./FormField.styled";

export const FormField = ({ id, label, children }) => {
  return (
    <SC.FieldWrapper>
      <SC.Label htmlFor={id}>{label}</SC.Label>
      {children}
    </SC.FieldWrapper>
  );
};
