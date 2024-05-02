import { Navigate, Route, Routes } from "react-router-dom";

import { RestrictedLayout } from "@/components/Layouts/RestrictedLayout/RestrictedLayout";
import LoginPage from "@/pages/LoginPage/LoginPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";

const RestrictedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RestrictedLayout />}>
        <Route index element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
};

export default RestrictedRoutes;
