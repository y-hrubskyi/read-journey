import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { bookFiltersSchema } from '~/config/validation/bookFiltersSchema';

import {
  Form,
  FieldsWrapper,
  FormTitle,
  TitleInput,
  AuthorInput,
  SubmitBtn
} from '~/components/common/Dashboard/Form.styled';
import { FormField } from '~/components/common/FormField/FormField';

export const Filters = ({ onSubmit }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(bookFiltersSchema)
  });

  const title = watch('title');
  const author = watch('author');

  const isCorrectTitle = title && !errors.title;
  const hasErrorTitle = errors.title || (errors[''] && !title && !author);
  const isCorrectAuthor = author && !errors.author;
  const hasErrorAuthor = errors.author || (errors[''] && !author && !title);

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
          errorMessage={errors.title?.message || errors['']?.message}
        >
          <TitleInput
            id="title"
            {...register('title')}
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
          errorMessage={errors.author?.message || errors['']?.message}
        >
          <AuthorInput
            id="author"
            {...register('author')}
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
