import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signInSchema } from "@/config/validation/signInSchema";
import { signIn } from "@/store/auth/operations";

import { FormField } from "@/components/common/FormField/FormField";
import { PasswordField } from "@/components/common/PasswordField/PasswordField";
import {
  EmailInput,
  PasswordInput,
  AuthPageLink,
} from "@/components/common/AuthForm/AuthForm.styled";
import * as SC from "./LoginForm.styled";

export const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signInSchema),
  });

  const togglePasswordShown = () => {
    setPasswordShown((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    dispatch(signIn(data));
  };

  const isCorrectEmail = dirtyFields.email && !errors.email;
  const hasErrorEmail = errors.email;
  const isCorrectPassword = dirtyFields.password && !errors.password;
  const hasErrorPassword = errors.password;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SC.FieldsWrapper>
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

      <SC.LoginSubmitBtn type="submit">Log In</SC.LoginSubmitBtn>
      <AuthPageLink to="/register">Don&apos;t have an account?</AuthPageLink>
    </form>
  );
};
