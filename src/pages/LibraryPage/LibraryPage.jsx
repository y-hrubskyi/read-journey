import { useEffect, useState } from "react";

import API from "@/services/axios";

import { AddBook } from "@/components/AddBook/AddBook";
import { RecommendedBooks } from "@/components/RecommendedBooks/RecommendedBooks";
import {
  BookListPageContent,
  ContentWrapper,
  HeaderWrapper,
  PageTitle,
} from "@/components/common/PageContent/PageContent.styled";
import { BookList } from "@/components/common/BookList/BookList";
import { Loader } from "@/components/common/Loader/Loader";
import { Placeholder } from "@/components/common/Placeholder/Placeholder";
import { DarkenedText } from "@/components/common/Placeholder/Placeholder.styled";

import * as SC from "./LibraryPage.styled";

const LibraryPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data } = await API.get(`/books/own`);
        setBooks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const emptyData = books.length === 0;
  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !isLoading && !error && !emptyData;
  const noData = !isLoading && !error && emptyData;

  return (
    <>
      <SC.Dashboard>
        <AddBook />
        <RecommendedBooks />
      </SC.Dashboard>
      <BookListPageContent>
        <HeaderWrapper>
          <PageTitle>My library</PageTitle>
        </HeaderWrapper>
        <ContentWrapper>
          {content && <BookList books={books} />}
          {loading && <Loader />}
          {hasError && <Placeholder>Oops... {error}</Placeholder>}
          {noData && (
            <Placeholder>
              To start training, add
              <DarkenedText>some of your books</DarkenedText>
              or from the recommended ones
            </Placeholder>
          )}
        </ContentWrapper>
      </BookListPageContent>
    </>
  );
};

export default LibraryPage;
