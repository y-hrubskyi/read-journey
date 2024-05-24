import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { BaseContainer } from "@/components/common/Layout/Layout.styled";
import { Header } from "@/components/Header/Header";
import * as SC from "./PrivateLayout.styled";

export const PrivateLayout = () => {
  return (
    <BaseContainer>
      <Header />

      <SC.Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </SC.Main>
    </BaseContainer>
  );
};
