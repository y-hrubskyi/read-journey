import { useEffect, useState } from "react";

import { usePagination } from "@/hooks/usePagination";
import API from "@/services/axios";

import { Filters } from "@/components/Filters/Filters";
import { Guide } from "@/components/Guide/Guide";
import { Quote } from "@/components/Quote/Quote";
import {
  PageContent,
  PageTitle,
} from "@/components/common/PageContent/PageContent.styled";
import { BookList } from "@/components/common/BookList/BookList";
import { Paginator } from "@/components/common/Paginator/Paginator";

import * as SC from "./RecommendedPage.styled";

const RecommendedPage = () => {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const { page, limit, setPage } = usePagination();

  useEffect(() => {
    (async () => {
      try {
        let validPage = page;
        if (isNaN(parseInt(page)) || page <= 0) validPage = 1;

        const searchParams = new URLSearchParams({ page: validPage, limit });

        const { data } = await API.get(`/books/recommend?${searchParams}`);
        setBooks(data.results);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        //
      }
    })();
  }, [page, limit]);

  const filterSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <SC.Dashboard>
        <Filters onSubmit={filterSubmit} />
        <Guide />
        <Quote />
      </SC.Dashboard>
      <PageContent>
        <SC.HeaderWrapper>
          <PageTitle>Recommended</PageTitle>
          <Paginator page={page} totalPages={totalPages} setPage={setPage} />
        </SC.HeaderWrapper>
        {books.length > 0 && <BookList books={books} />}
      </PageContent>
    </>
  );
};

export default RecommendedPage;
