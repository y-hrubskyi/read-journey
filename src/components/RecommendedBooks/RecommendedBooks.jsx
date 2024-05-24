import { useEffect, useState } from "react";

import { Icons } from "@/config/icons";
import { useModal } from "@/hooks/useModal";
import API from "@/services/axios";

import {
  InfoWrapper,
  AnotherPageLinksWrapper,
  AnotherPageLink,
  AnotherPageLinkBtn,
  ArrowIcon,
} from "@/components/common/Dashboard/InfoBlock.styled";
import { BookModal } from "@/components/common/BookModal/BookModal";
import { Placeholder } from "@/components/common/Placeholder/Placeholder";
import { Loader } from "@/components/common/Loader/Loader";

import * as SC from "./RecommendedBooks.styled";

const BookItem = ({ book }) => {
  const { isModalOpen, toggleModal } = useModal();

  return (
    <SC.BookItem key={book._id}>
      <SC.BookImg src={book.imageUrl} alt={book.title} onClick={toggleModal} />
      <SC.BookTitle>{book.title}</SC.BookTitle>
      <SC.BookAuthor>{book.author}</SC.BookAuthor>
      {isModalOpen && (
        <BookModal isOpen={isModalOpen} onClose={toggleModal} book={book} />
      )}
    </SC.BookItem>
  );
};

export const RecommendedBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const searchParams = new URLSearchParams({ limit: 3 });

        const { data } = await API.get(`/books/recommend?${searchParams}`);
        setBooks(data.results);
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
    <InfoWrapper>
      <SC.RecommendedBooksTitle>Recommended books</SC.RecommendedBooksTitle>

      <SC.ListWrapper>
        {content && (
          <SC.BookList>
            {books.map((book) => (
              <BookItem key={book._id} book={book} />
            ))}
          </SC.BookList>
        )}
        {loading && <Loader />}
        {hasError && <Placeholder>Oops... {error}</Placeholder>}
        {noData && (
          <Placeholder>
            Nothing found. Please check your spelling or try other terms
          </Placeholder>
        )}
      </SC.ListWrapper>

      <AnotherPageLinksWrapper>
        <AnotherPageLink to="/recommended">Home</AnotherPageLink>
        <AnotherPageLinkBtn to="/recommended" aria-label="go to my home page">
          <ArrowIcon>
            <use href={Icons.arrow}></use>
          </ArrowIcon>
        </AnotherPageLinkBtn>
      </AnotherPageLinksWrapper>
    </InfoWrapper>
  );
};
