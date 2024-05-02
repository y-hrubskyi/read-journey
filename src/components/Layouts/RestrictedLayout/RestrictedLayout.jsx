import { Outlet } from "react-router-dom";

export const RestrictedLayout = () => {
  return (
    <div>
      RestrictedLayout
      <Outlet />
    </div>
  );
};
