import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export const RestrictedLayout = () => {
  return (
    <div>
      RestrictedLayout
      <div>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
