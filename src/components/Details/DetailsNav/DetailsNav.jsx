import { Icons } from "@/config/icons";

import * as SC from "./DetailsNav.styled";

export const DetailsNav = ({ detailsType, setDetailsType }) => {
  return (
    <SC.DetailsNav>
      <SC.DetailsNavBtn onClick={() => setDetailsType("diary")}>
        <SC.DetailsNavIcon data-is-active={detailsType === "diary"}>
          <use href={Icons.hourglass}></use>
        </SC.DetailsNavIcon>
      </SC.DetailsNavBtn>
      <SC.DetailsNavBtn onClick={() => setDetailsType("statistics")}>
        <SC.DetailsNavIcon data-is-active={detailsType === "statistics"}>
          <use href={Icons.pieChart}></use>
        </SC.DetailsNavIcon>
      </SC.DetailsNavBtn>
    </SC.DetailsNav>
  );
};
