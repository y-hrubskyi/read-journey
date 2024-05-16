import { AddBook } from "@/components/AddBook/AddBook";
import {
  BookListPageContent,
  ContentWrapper,
  HeaderWrapper,
  PageTitle,
} from "@/components/common/PageContent/PageContent.styled";

import * as SC from "./LibraryPage.styled";

const LibraryPage = () => {
  return (
    <>
      <SC.Dashboard>
        <AddBook />
      </SC.Dashboard>
      <BookListPageContent>
        <HeaderWrapper>
          <PageTitle>My library</PageTitle>
        </HeaderWrapper>
        <ContentWrapper></ContentWrapper>
      </BookListPageContent>
    </>
  );
};

export default LibraryPage;
