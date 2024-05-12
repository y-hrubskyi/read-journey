import { Dashboard } from "@/components/common/Dashboard/Dashboard.styled";
import {
  PageContent,
  PageTitle,
} from "@/components/common/PageContent/PageContent.styled";

const RecommendedPage = () => {
  return (
    <>
      <Dashboard></Dashboard>
      <PageContent>
        <PageTitle>Recommended</PageTitle>
      </PageContent>
    </>
  );
};

export default RecommendedPage;
