import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectOwnLibrary } from "@/store/books/selectors";
import { fetchOwnLibrary } from "@/store/books/operations";

import { AddBook } from "@/components/AddBook/AddBook";
import { RecommendedBooks } from "@/components/RecommendedBooks/RecommendedBooks";
import {
  BookListPageContent,
  ContentWrapper,
  HeaderWrapper,
  PageTitle,
} from "@/components/common/PageContent/PageContent.styled";
import { BookList } from "@/components/common/BookList/BookList.styled";
import { OwnBookItem } from "@/components/common/OwnBookItem/OwnBookItem";
import { Loader } from "@/components/common/Loader/Loader";
import { Placeholder } from "@/components/common/Placeholder/Placeholder";
import { DarkenedText } from "@/components/common/Placeholder/Placeholder.styled";

import * as SC from "./LibraryPage.styled";

const LibraryPage = () => {
  const library = useSelector(selectOwnLibrary);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        await dispatch(fetchOwnLibrary()).unwrap();
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dispatch]);

  const emptyData = library.length === 0;
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
          {content && (
            <BookList>
              {library.map((book) => (
                <OwnBookItem key={book._id} book={book} />
              ))}
            </BookList>
          )}
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
