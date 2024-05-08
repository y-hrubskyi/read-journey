import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signUpSchema } from "@/config/validation/signUpSchema";
import { signUp } from "@/store/auth/operations";

import { FormField } from "@/components/common/FormField/FormField";
import { PasswordField } from "@/components/common/PasswordField/PasswordField";
import {
  NameInput,
  EmailInput,
  PasswordInput,
  AuthSubmitBtn,
  AuthPageLink,
} from "@/components/common/AuthForm/AuthForm.styled";
import * as SC from "./RegisterForm.styled";

export const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signUpSchema),
  });

  const togglePasswordShown = () => {
    setPasswordShown((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    dispatch(signUp(data));
  };

  const isCorrectName = dirtyFields.name && !errors.name;
  const hasErrorName = errors.name;
  const isCorrectEmail = dirtyFields.email && !errors.email;
  const hasErrorEmail = errors.email;
  const isCorrectPassword = dirtyFields.password && !errors.password;
  const hasErrorPassword = errors.password;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SC.FieldsWrapper>
        <FormField
          id="name"
          label="Name:"
          isCorrect={isCorrectName}
          correctMessage="Name is correct"
          hasError={hasErrorName}
          errorMessage={errors.name?.message}
        >
          <NameInput
            id="name"
            {...register("name")}
            type="text"
            data-is-correct={isCorrectName}
            data-has-error={hasErrorName}
          />
        </FormField>
        <FormField
          id="email"
          label="Mail:"
          isCorrect={isCorrectEmail}
          correctMessage="Email is correct"
          hasError={hasErrorEmail}
          errorMessage={errors.email?.message}
        >
          <EmailInput
            id="email"
            {...register("email")}
            type="email"
            data-is-correct={isCorrectEmail}
            data-has-error={hasErrorEmail}
          />
        </FormField>
        <PasswordField
          id="password"
          label="Password:"
          passwordShown={passwordShown}
          onTogglePasswordShown={togglePasswordShown}
          isCorrect={isCorrectPassword}
          correctMessage="Password is secure"
          hasError={hasErrorPassword}
          errorMessage={errors.password?.message}
        >
          <PasswordInput
            id="password"
            {...register("password")}
            type={passwordShown ? "text" : "password"}
            data-is-correct={isCorrectPassword}
            data-has-error={hasErrorPassword}
          />
        </PasswordField>
      </SC.FieldsWrapper>

      <AuthSubmitBtn type="submit">Registration</AuthSubmitBtn>
      <AuthPageLink to="login">Already have an account?</AuthPageLink>
    </form>
  );
};
