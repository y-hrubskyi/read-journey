import { Icons } from '~/config/icons';

import * as SC from './Paginator.styled';

export const Paginator = ({ page, totalPages, setPage, noContent }) => {
  const prevBtnDisabled = page === 1 || noContent;
  const nextBtnDisabled = page === totalPages || noContent;

  return (
    <SC.BtnWrapper>
      <SC.Btn
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={prevBtnDisabled}
        data-disabled={prevBtnDisabled}
        aria-label="previous page"
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
        aria-label="next page"
      >
        <SC.ChevronIcon>
          <use href={Icons.chevron}></use>
        </SC.ChevronIcon>
      </SC.Btn>
    </SC.BtnWrapper>
  );
};
