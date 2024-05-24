import { Icons } from "@/config/icons";

import {
  FieldWrapper,
  Label,
  CorrectIcon,
  CorrectMessage,
  ErrorIcon,
  ErrorMessage,
} from "@/components/common/FormField/FormField.styled";
import * as SC from "./PasswordField.styled";

export const PasswordField = ({
  id,
  label,
  isCorrect,
  correctMessage,
  hasError,
  errorMessage,
  passwordShown,
  onTogglePasswordShown,
  children,
}) => {
  return (
    <FieldWrapper>
      <Label htmlFor={id}>{label}</Label>
      {children}
      <SC.EyeBtn
        type="button"
        onClick={onTogglePasswordShown}
        aria-label={`${passwordShown ? "hide" : "show"} password`}
        data-was-valid={isCorrect || hasError}
      >
        <SC.EyeIcon>
          <use href={passwordShown ? Icons.eyeOn : Icons.eyeOff}></use>
        </SC.EyeIcon>
      </SC.EyeBtn>
      {isCorrect && (
        <>
          <CorrectIcon>
            <use href={Icons.correct}></use>
          </CorrectIcon>
          <CorrectMessage>{correctMessage}</CorrectMessage>
        </>
      )}
      {hasError && (
        <>
          <ErrorIcon>
            <use href={Icons.error}></use>
          </ErrorIcon>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </>
      )}
    </FieldWrapper>
  );
};
