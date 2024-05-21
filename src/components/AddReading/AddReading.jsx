import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { addReadingSchema } from "@/config/validation/addReadingSchema";

import {
  Form,
  FieldsWrapper,
  FormTitle,
  SubmitBtn,
} from "@/components/common/Dashboard/Form.styled";
import { FormField } from "@/components/common/FormField/FormField";

import * as SC from "./AddReading.styled";

export const AddReading = ({ isReading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(addReadingSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const isCorrectPage = dirtyFields.page && !errors.page;
  const hasErrorPage = errors.page;

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldsWrapper>
          <FormTitle>{isReading ? "Stop" : "Start"} page:</FormTitle>
          <FormField
            id="page"
            label="Page number:"
            isCorrect={isCorrectPage}
            correctMessage="Page is correct"
            hasError={hasErrorPage}
            errorMessage={errors.page?.message}
          >
            <SC.PageInput
              id="page"
              {...register("page")}
              type="text"
              data-is-correct={isCorrectPage}
              data-has-error={hasErrorPage}
            />
          </FormField>
        </FieldsWrapper>
        <SubmitBtn type="submit">To {isReading ? "stop" : "start"}</SubmitBtn>
      </Form>
    </>
  );
};
