import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "@/services/axios";

import { AddReading } from "@/components/AddReading/AddReading";
import { RecommendedBooks } from "@/components/RecommendedBooks/RecommendedBooks";
import {
  ContentWrapper,
  HeaderWrapper,
  PageTitle,
} from "@/components/common/PageContent/PageContent.styled";
import { MyBook } from "@/components/MyBook/MyBook";
import { Loader } from "@/components/common/Loader/Loader";
import { Placeholder } from "@/components/common/Placeholder/Placeholder";
import { DarkenedText } from "@/components/common/Placeholder/Placeholder.styled";

import * as SC from "./ReadingPage.styled";

const ReadingPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data } = await API.get(`/books/${bookId}`);

        const { progress } = data;
        const isReading =
          progress.length && progress[progress.length - 1].status === "active";
        if (isReading) setIsReading(true);

        setBook(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [bookId]);

  const toggleReading = () => {
    setIsReading((prevState) => !prevState);
  };

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !isLoading && !error && book;
  const noData = !isLoading && !error && !book;

  return (
    <>
      <SC.Dashboard>
        <AddReading
          isReading={isReading}
          toggleReading={toggleReading}
          bookId={bookId}
          setBook={setBook}
        />
        <RecommendedBooks />
      </SC.Dashboard>
      <SC.BookReadingPageContent>
        <HeaderWrapper>
          <PageTitle>My reading</PageTitle>
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
