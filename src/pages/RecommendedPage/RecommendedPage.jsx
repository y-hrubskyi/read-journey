import { Dashboard } from "@/components/common/Dashboard/Dashboard.styled";
import { Filters } from "@/components/Filters/Filters";
import {
  PageContent,
  PageTitle,
} from "@/components/common/PageContent/PageContent.styled";

const RecommendedPage = () => {
  return (
    <>
      <Dashboard>
        <Filters />
      </Dashboard>
      <PageContent>
        <PageTitle>Recommended</PageTitle>
      </PageContent>
    </>
  );
};

export default RecommendedPage;
