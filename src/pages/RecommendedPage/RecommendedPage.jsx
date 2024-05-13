import { useEffect, useState } from "react";

import API from "@/services/axios";

import { Filters } from "@/components/Filters/Filters";
import { Guide } from "@/components/Guide/Guide";
import { Quote } from "@/components/Quote/Quote";
import {
  PageContent,
  PageTitle,
} from "@/components/common/PageContent/PageContent.styled";
import { BookList } from "@/components/common/BookList/BookList";

import * as SC from "./RecommendedPage.styled";

const RecommendedPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/books/recommend");
        setBooks(data.results);
      } catch (error) {
        //
      }
    })();
  }, []);

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
        <PageTitle>Recommended</PageTitle>
        {books.length > 0 && <BookList books={books} />}
      </PageContent>
    </>
  );
};

export default RecommendedPage;
