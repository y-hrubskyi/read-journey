import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { BaseContainer } from "@/components/common/Layout/Layout.styled";
import { Header } from "@/components/Header/Header";

export const PrivateLayout = () => {
  return (
    <BaseContainer>
      <Header />

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </BaseContainer>
  );
};
