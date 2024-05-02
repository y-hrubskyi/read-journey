import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export const PrivateLayout = () => {
  return (
    <div>
      PrivateLayout
      <div>
        <Link to="/recommended">Home</Link>
        <Link to="/library">My library</Link>
        <Link to="/reading">My training</Link>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
