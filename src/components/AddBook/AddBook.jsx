import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { addBookSchema } from '~/config/validation/addBookSchema';
import { addToLibraryNewBook } from '~/store/books/operations';

import {
  Form,
  FieldsWrapper,
  FormTitle,
  SubmitBtn,
  TitleInput,
  AuthorInput
} from '~/components/common/Dashboard/Form.styled';
import { FormField } from '~/components/common/FormField/FormField';
import { NewBookAddedModal } from '~/components/NewBookAddedModal/NewBookAddedModal';

import * as SC from './AddBook.styled';

export const AddBook = () => {
  const [isNotifyShown, setIsNotifyShown] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(addBookSchema)
  });

  const toggleNotify = () => {
    setIsNotifyShown(prevState => !prevState);
  };

  const onSubmit = async data => {
    const toastId = toast.loading('Adding...');

    try {
      await dispatch(addToLibraryNewBook(data)).unwrap();

      toggleNotify();
      reset();
    } catch (error) {
      toast.error(error);
    } finally {
      toast.dismiss(toastId);
    }
  };

  const isCorrectTitle = dirtyFields.title && !errors.title;
  const hasErrorTitle = errors.title;
  const isCorrectAuthor = dirtyFields.author && !errors.author;
  const hasErrorAuthor = errors.author;
  const isCorrectPages = dirtyFields.totalPages && !errors.totalPages;
  const hasErrorPages = errors.totalPages;

  return (
    <>
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
            errorMessage={errors.author?.message}
          >
            <AuthorInput
              id="author"
              {...register('author')}
              type="text"
              data-is-correct={isCorrectAuthor}
              data-has-error={hasErrorAuthor}
            />
          </FormField>
          <FormField
            id="totalPages"
            label="Number of pages:"
            isCorrect={isCorrectPages}
            correctMessage="Number of pages is correct"
            hasError={hasErrorPages}
            errorMessage={errors.totalPages?.message}
          >
            <SC.PagesInput
              id="totalPages"
              {...register('totalPages')}
              type="text"
              data-is-correct={isCorrectPages}
              data-has-error={hasErrorPages}
            />
          </FormField>
        </FieldsWrapper>
        <SubmitBtn type="submit">Add a book</SubmitBtn>
      </Form>

      {isNotifyShown && (
        <NewBookAddedModal isOpen={isNotifyShown} onClose={toggleNotify} />
      )}
    </>
  );
};
