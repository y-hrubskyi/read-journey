import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Logo } from "@/components/common/Logo/Logo";
import * as SC from "./RestrictedLayout.styled";

export const RestrictedLayout = () => {
  return (
    <SC.Container>
      <SC.FormWrapper>
        <Logo />
        <SC.SloganHeading>
          Expand your mind, reading <SC.DarkenedText>a book</SC.DarkenedText>
        </SC.SloganHeading>
        <Suspense>
          <Outlet />
        </Suspense>
      </SC.FormWrapper>
      <SC.PreviewWrapper />
    </SC.Container>
  );
};
