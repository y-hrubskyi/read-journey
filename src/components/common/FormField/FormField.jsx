import { Icons } from '@/config/icons';

import * as SC from './FormField.styled';

export const FormField = ({
  id,
  label,
  isCorrect,
  correctMessage,
  hasError,
  errorMessage,
  children
}) => {
  return (
    <SC.FieldWrapper>
      <SC.Label htmlFor={id}>{label}</SC.Label>
      {children}
      {isCorrect && (
        <>
          <SC.CorrectIcon>
            <use href={Icons.correct}></use>
          </SC.CorrectIcon>
          <SC.CorrectMessage>{correctMessage}</SC.CorrectMessage>
        </>
      )}
      {hasError && (
        <>
          <SC.ErrorIcon>
            <use href={Icons.error}></use>
          </SC.ErrorIcon>
          <SC.ErrorMessage>{errorMessage}</SC.ErrorMessage>
        </>
      )}
    </SC.FieldWrapper>
  );
};
