import { useEffect, useState } from "react";

import { usePagination } from "@/hooks/usePagination";
import API from "@/services/axios";

import { Filters } from "@/components/Filters/Filters";
import { Guide } from "@/components/Guide/Guide";
import { Quote } from "@/components/Quote/Quote";
import {
  BookListPageContent,
  HeaderWrapper,
  PageTitle,
  ContentWrapper,
} from "@/components/common/PageContent/PageContent.styled";
import { BookList } from "@/components/common/BookList/BookList";
import { Paginator } from "@/components/common/Paginator/Paginator";
import { Loader } from "@/components/common/Loader/Loader";
import { Placeholder } from "@/components/common/Placeholder/Placeholder";

import * as SC from "./RecommendedPage.styled";

const RecommendedPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { limit, page, setPage } = usePagination();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        let validPage = page;
        if (isNaN(parseInt(page)) || page <= 0) validPage = 1;

        const searchParams = new URLSearchParams({ page: validPage, limit });
        if (title) searchParams.set("title", title);
        if (author) searchParams.set("author", author);

        const { data } = await API.get(`/books/recommend?${searchParams}`);
        setBooks(data.results);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, limit, title, author]);

  const filterSubmit = (data) => {
    setPage(1);
    setTitle(data.title);
    setAuthor(data.author);
  };

  const emptyData = books.length === 0;
  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !isLoading && !error && !emptyData;
  const noData = !isLoading && !error && emptyData;

  const disabledPaginationBtns = noData || hasError;

  return (
    <>
      <SC.Dashboard>
        <Filters onSubmit={filterSubmit} />
        <Guide />
        <Quote />
      </SC.Dashboard>
      <BookListPageContent>
        <HeaderWrapper>
          <PageTitle>Recommended</PageTitle>
          <Paginator
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            noContent={disabledPaginationBtns}
          />
        </HeaderWrapper>
        <ContentWrapper>
          {content && <BookList books={books} />}
          {loading && <Loader />}
          {hasError && <Placeholder>Oops... {error}</Placeholder>}
          {noData && (
            <Placeholder>
              Nothing found. Please check your spelling or try other terms
            </Placeholder>
          )}
        </ContentWrapper>
      </BookListPageContent>
    </>
  );
};

export default RecommendedPage;
