import {
  ContentWrapper,
  HeaderWrapper,
  PageTitle,
} from "@/components/common/PageContent/PageContent.styled";

import * as SC from "./ReadingPage.styled";

const ReadingPage = () => {
  return (
    <>
      <SC.Dashboard></SC.Dashboard>
      <SC.BookReadingPageContent>
        <HeaderWrapper>
          <PageTitle>My reading</PageTitle>
        </HeaderWrapper>
        <ContentWrapper></ContentWrapper>
      </SC.BookReadingPageContent>
    </>
  );
};

export default ReadingPage;
