import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { RestrictedLayout } from "@/components/Layouts/RestrictedLayout/RestrictedLayout";

const LoginPage = lazy(() => import("@/pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage/RegisterPage"));

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
