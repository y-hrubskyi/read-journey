import { Filters } from "@/components/Filters/Filters";
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
      </SC.Dashboard>
      <PageContent>
        <PageTitle>Recommended</PageTitle>
      </PageContent>
    </>
  );
};

export default RecommendedPage;
