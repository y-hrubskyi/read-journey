import { Navigate, Route, Routes } from "react-router-dom";

import { PrivateLayout } from "@/components/Layouts/PrivateLayout/PrivateLayout";
import RecommendedPage from "@/pages/RecommendedPage/RecommendedPage";
import LibraryPage from "@/pages/LibraryPage/LibraryPage";
import ReadingPage from "@/pages/ReadingPage/ReadingPage";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<Navigate to="/recommended" />} />
        <Route path="recommended" element={<RecommendedPage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="reading" element={<ReadingPage />} />
        <Route path="*" element={<Navigate to="/recommended" />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
