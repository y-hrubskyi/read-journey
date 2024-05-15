import { Icons } from "@/config/icons";

import * as SC from "./Paginator.styled";

export const Paginator = ({ page, totalPages, setPage }) => {
  const prevBtnDisabled = page === 1;
  const nextBtnDisabled = page === totalPages;

  return (
    <SC.BtnWrapper>
      <SC.Btn
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={prevBtnDisabled}
        data-disabled={prevBtnDisabled}
      >
        <SC.PrevChevronIcon>
          <use href={Icons.chevron}></use>
        </SC.PrevChevronIcon>
      </SC.Btn>
      <SC.Btn
        type="button"
        onClick={() => setPage(page + 1)}
        disabled={nextBtnDisabled}
        data-disabled={nextBtnDisabled}
      >
        <SC.ChevronIcon>
          <use href={Icons.chevron}></use>
        </SC.ChevronIcon>
      </SC.Btn>
    </SC.BtnWrapper>
  );
};