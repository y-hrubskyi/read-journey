import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const RestrictedLayout = () => {
  return (
    <div>
      RestrictedLayout
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
