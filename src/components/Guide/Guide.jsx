import { Icons } from "@/config/icons";

import {
  InfoWrapper,
  AnotherPageLinksWrapper,
  AnotherPageLink,
  AnotherPageLinkBtn,
  ArrowIcon,
} from "@/components/common/Dashboard/Dashboard.styled";
import * as SC from "./Guide.styled";

export const Guide = () => {
  return (
    <InfoWrapper>
      <SC.GuideTitle>Start your workout</SC.GuideTitle>

      <SC.Points>
        <SC.Point>
          <SC.Number>1</SC.Number>
          <SC.Description>
            <SC.AccentText>Create a personal library:</SC.AccentText> add the
            books you intend to read to it.
          </SC.Description>
        </SC.Point>
        <SC.Point>
          <SC.Number>2</SC.Number>
          <SC.Description>
            <SC.AccentText>Create your first workout:</SC.AccentText> define a
            goal, choose a period, start training.
          </SC.Description>
        </SC.Point>
      </SC.Points>

      <AnotherPageLinksWrapper>
        <AnotherPageLink to="/library">My library</AnotherPageLink>
        <AnotherPageLinkBtn to="/library">
          <ArrowIcon>
            <use href={Icons.arrow}></use>
          </ArrowIcon>
        </AnotherPageLinkBtn>
      </AnotherPageLinksWrapper>
    </InfoWrapper>
  );
};
