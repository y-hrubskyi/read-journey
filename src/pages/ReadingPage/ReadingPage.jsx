import { useState } from "react";

import { AddReading } from "@/components/AddReading/AddReading";
import {
  ContentWrapper,
  HeaderWrapper,
  PageTitle,
} from "@/components/common/PageContent/PageContent.styled";

import * as SC from "./ReadingPage.styled";

const ReadingPage = () => {
  const [isReading, setIsReading] = useState(false);

  return (
    <>
      <SC.Dashboard>
        <AddReading isReading={isReading} />
      </SC.Dashboard>
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
