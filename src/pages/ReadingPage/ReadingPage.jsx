import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import API from '~/services/axios';
import { getLastReadPage } from '~/utils/getLastReadPage';

import { AddReading } from '~/components/AddReading/AddReading';
import { Details } from '~/components/Details/Details';
import {
  ContentWrapper,
  HeaderWrapper,
  PageTitle
} from '~/components/common/PageContent/PageContent.styled';
import { MyBook } from '~/components/MyBook/MyBook';
import { Loader } from '~/components/common/Loader/Loader';
import { Placeholder } from '~/components/common/Placeholder/Placeholder';
import { DarkenedText } from '~/components/common/Placeholder/Placeholder.styled';

import * as SC from './ReadingPage.styled';

const ReadingPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [detailsType, setDetailsType] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data } = await API.get(`/books/${bookId}`);

        const { progress } = data;
        const isReading =
          progress.length && progress[progress.length - 1].status === 'active';
        if (isReading) setIsReading(true);
        setBook(data);

        if (data.status !== 'unread' && data.progress[0].finishPage) {
          setDetailsType('diary');
        } else {
          setDetailsType('progress');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [bookId]);

  const toggleReading = () => {
    setIsReading(prevState => !prevState);
  };

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !isLoading && !error && book;
  const noData = !isLoading && !error && !book;

  const hours = book?.timeLeftToRead?.hours;
  const minutes = book?.timeLeftToRead?.minutes;

  return (
    <>
      <SC.Dashboard>
        {content && (
          <>
            <AddReading
              isReading={isReading}
              toggleReading={toggleReading}
              bookId={bookId}
              lastReadPage={getLastReadPage(book.progress, book.totalPages)}
              totalPages={book.totalPages}
              setBook={setBook}
              setDetailsType={setDetailsType}
            />
            <Details
              book={book}
              setBook={setBook}
              detailsType={detailsType}
              setDetailsType={setDetailsType}
            />
          </>
        )}
      </SC.Dashboard>
      <SC.BookReadingPageContent>
        <HeaderWrapper>
          <PageTitle>My reading</PageTitle>
          {book?.timeLeftToRead && (
            <SC.ReadingTime>
              {hours} hours and {minutes} minutes left
            </SC.ReadingTime>
          )}
        </HeaderWrapper>
        <ContentWrapper>
          {content && <MyBook book={book} isReading={isReading} />}
          {loading && <Loader />}
          {hasError && <Placeholder>Oops... {error}</Placeholder>}
          {noData && (
            <Placeholder>
              To start training, add
              <DarkenedText> some of your books </DarkenedText>
              or from the recommended ones
            </Placeholder>
          )}
        </ContentWrapper>
      </SC.BookReadingPageContent>
    </>
  );
};

export default ReadingPage;
