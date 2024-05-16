import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { addBookSchema } from "@/config/validation/addBookSchema";

import {
  Form,
  FieldsWrapper,
  FormTitle,
  SubmitBtn,
  TitleInput,
  AuthorInput,
} from "@/components/common/Dashboard/Form.styled";
import { FormField } from "@/components/common/FormField/FormField";

import * as SC from "./AddBook.styled";

export const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(addBookSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const isCorrectTitle = dirtyFields.title && !errors.title;
  const hasErrorTitle = errors.title;
  const isCorrectAuthor = dirtyFields.author && !errors.author;
  const hasErrorAuthor = errors.author;
  const isCorrectPages = dirtyFields.pages && !errors.pages;
  const hasErrorPages = errors.pages;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldsWrapper>
        <FormTitle>Create your library:</FormTitle>
        <FormField
          id="title"
          label="Book title:"
          isCorrect={isCorrectTitle}
          correctMessage="Title is correct"
          hasError={hasErrorTitle}
          errorMessage={errors.title?.message}
        >
          <TitleInput
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
          <AuthorInput
            id="author"
            {...register("author")}
            type="text"
            data-is-correct={isCorrectAuthor}
            data-has-error={hasErrorAuthor}
          />
        </FormField>
        <FormField
          id="pages"
          label="Number of pages:"
          isCorrect={isCorrectPages}
          correctMessage="Number of pages is correct"
          hasError={hasErrorPages}
          errorMessage={errors.pages?.message}
        >
          <SC.PagesInput
            id="pages"
            {...register("pages")}
            type="text"
            data-is-correct={isCorrectPages}
            data-has-error={hasErrorPages}
          />
        </FormField>
      </FieldsWrapper>

      <SubmitBtn type="submit">Add a book</SubmitBtn>
    </Form>
  );
};
