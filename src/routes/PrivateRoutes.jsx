import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PrivateLayout } from '~/components/Layouts/PrivateLayout/PrivateLayout';

const RecommendedPage = lazy(
  () => import('~/pages/RecommendedPage/RecommendedPage')
);
const LibraryPage = lazy(() => import('~/pages/LibraryPage/LibraryPage'));
const ReadingPage = lazy(() => import('~/pages/ReadingPage/ReadingPage'));

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<Navigate to="/recommended" />} />
        <Route path="recommended" element={<RecommendedPage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="reading/:bookId" element={<ReadingPage />} />
        <Route path="*" element={<Navigate to="/recommended" />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
