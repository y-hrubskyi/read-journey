import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { filterBooksSchema } from "@/config/validation/filterBooksSchema";

import {
  Form,
  FieldsWrapper,
  FormTitle,
  SubmitBtn,
} from "@/components/common/Dashboard/Dashboard.styled";
import { FormField } from "@/components/common/FormField/FormField";
import * as SC from "./Filters.styled";

export const Filters = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(filterBooksSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const isCorrectTitle = dirtyFields.title && !errors.title;
  const hasErrorTitle = errors.title;
  const isCorrectAuthor = dirtyFields.author && !errors.author;
  const hasErrorAuthor = errors.author;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldsWrapper>
        <FormTitle>Filters:</FormTitle>
        <FormField
          id="title"
          label="Book title:"
          isCorrect={isCorrectTitle}
          correctMessage="Title is correct"
          hasError={hasErrorTitle}
          errorMessage={errors.title?.message}
        >
          <SC.TitleInput
            id="title"
            {...register("title")}
            type="text"
            data-is-correct={isCorrectTitle}
            data-has-error={hasErrorTitle}
          />
        </FormField>
        <FormField
          id="author"
          label="The author:"
          isCorrect={isCorrectAuthor}
          correctMessage="Author is correct"
          hasError={hasErrorAuthor}
          errorMessage={errors.author?.message}
        >
          <SC.AuthorInput
            id="author"
            {...register("author")}
            type="text"
            data-is-correct={isCorrectAuthor}
            data-has-error={hasErrorAuthor}
          />
        </FormField>
      </FieldsWrapper>

      <SubmitBtn type="submit">To apply</SubmitBtn>
    </Form>
  );
};
