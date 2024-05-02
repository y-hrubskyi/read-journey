import PrivateRoutes from "@/routes/PrivateRoutes";
import RestrictedRoutes from "@/routes/RestrictedRoutes";

export const App = () => {
  const isLoggedIn = false;

  if (isLoggedIn) return <PrivateRoutes />;

  return <RestrictedRoutes />;
};
