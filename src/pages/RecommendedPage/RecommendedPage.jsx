import { useEffect, useState } from "react";

import { usePagination } from "@/hooks/usePagination";
import { useBookFilters } from "@/hooks/useBookFilters";
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

import * as SC from "./RecommendedPage.styled";

const RecommendedPage = () => {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const { page, limit, setPage } = usePagination();
  const { title, author, setBookFilter } = useBookFilters();

  useEffect(() => {
    (async () => {
      try {
        let validPage = page;
        if (isNaN(parseInt(page)) || page <= 0) validPage = 1;

        const searchParams = new URLSearchParams({ page: validPage, limit });
        if (title) searchParams.set("title", title);
        if (author) searchParams.set("author", author);

        const { data } = await API.get(`/books/recommend?${searchParams}`);
        setBooks(data.results);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        //
      }
    })();
  }, [page, limit, title, author]);

  const filterSubmit = (data) => {
    setPage(1);
    setBookFilter("title", data.title);
    setBookFilter("author", data.author);
  };

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
          <Paginator page={page} totalPages={totalPages} setPage={setPage} />
        </HeaderWrapper>
        <ContentWrapper>
          {books.length > 0 && <BookList books={books} />}
        </ContentWrapper>
      </BookListPageContent>
    </>
  );
};

export default RecommendedPage;
