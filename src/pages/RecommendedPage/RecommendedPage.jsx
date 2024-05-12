import { Filters } from "@/components/Filters/Filters";
import { Guide } from "@/components/Guide/Guide";
import {
  PageContent,
  PageTitle,
} from "@/components/common/PageContent/PageContent.styled";
import * as SC from "./RecommendedPage.styled";

const RecommendedPage = () => {
  return (
    <>
      <SC.Dashboard>
        <Filters />
        <Guide />
      </SC.Dashboard>
      <PageContent>
        <PageTitle>Recommended</PageTitle>
      </PageContent>
    </>
  );
};

export default RecommendedPage;
