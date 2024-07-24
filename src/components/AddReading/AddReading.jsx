import { useState } from 'react';
import toast from 'react-hot-toast';

import {
  finishReadingSchema,
  startReadingSchema
} from '@/config/validation/addReadingSchema';
import API from '@/services/axios';
import { useCustomForm } from '@/hooks/useCustomForm';
import { getLastReadPage } from '@/utils/getLastReadPage';

import {
  Form,
  FieldsWrapper,
  FormTitle,
  SubmitBtn
} from '@/components/common/Dashboard/Form.styled';
import { FormField } from '@/components/common/FormField/FormField';
import { BookReadModal } from '@/components/BookReadModal/BookReadModal';

import * as SC from './AddReading.styled';

export const AddReading = ({
  isReading,
  toggleReading,
  bookId,
  lastReadPage,
  totalPages,
  setBook,
  setDetailsType
}) => {
  const [isNotifyShown, setIsNotifyShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    updateSchema,
    reset
  } = useCustomForm({
    schema: isReading
      ? finishReadingSchema(lastReadPage, totalPages)
      : startReadingSchema(lastReadPage)
  });

  const toggleNotify = () => {
    setIsNotifyShown(prevState => !prevState);
  };

  const onSubmit = async data => {
    const loadingMessage = 'Wait a moment...';
    const successMessage = `Reading ${isReading ? 'stopped' : 'started'}`;
    const reqUrl = `/books/reading/${isReading ? 'finish' : 'start'}`;

    const toastId = toast.loading(loadingMessage);
    try {
      const { data: resData } = await API.post(reqUrl, {
        id: bookId,
        page: data.page
      });

      toast.dismiss(toastId);

      if (resData.status === 'done') {
        toggleNotify();
      } else {
        toast.success(successMessage);
      }

      if (resData.progress.length === 1 && isReading) {
        setDetailsType('diary');
      }

      const lastReadPage = getLastReadPage(
        resData.progress,
        resData.totalPages
      );
      if (isReading) {
        updateSchema(startReadingSchema(lastReadPage));
      } else {
        updateSchema(finishReadingSchema(lastReadPage, totalPages));
      }

      toggleReading();
      setBook(resData);
      reset();
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.response.data.message);
    }
  };

  const isCorrectPage = dirtyFields.page && !errors.page;
  const hasErrorPage = errors.page;

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldsWrapper>
          <FormTitle>{isReading ? 'Stop' : 'Start'} page:</FormTitle>
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
              {...register('page')}
              type="text"
              data-is-correct={isCorrectPage}
              data-has-error={hasErrorPage}
            />
          </FormField>
        </FieldsWrapper>
        <SubmitBtn type="submit">To {isReading ? 'stop' : 'start'}</SubmitBtn>
      </Form>

      {isNotifyShown && (
        <BookReadModal isOpen={isNotifyShown} onClose={toggleNotify} />
      )}
    </>
  );
};
