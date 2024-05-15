import { ModalTypes } from "@/config/modals";

import { ModalBase } from "@/components/common/ModalBase/ModalBase";
import * as SC from "./BookModal.styled";

export const BookModal = ({ isOpen, onClose, book }) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} type={ModalTypes.CONTENT}>
      <SC.ModalContent>
        <SC.BookImg src={book.imageUrl} alt={book.title} />
        <SC.BookTitle>{book.title}</SC.BookTitle>
        <SC.BookAuthor>{book.author}</SC.BookAuthor>
        <SC.BookPages>
          {book.totalPages} {book.totalPages === 1 ? "page" : "pages"}
        </SC.BookPages>
        <SC.ActionBookBtn type="button">Add to library</SC.ActionBookBtn>
      </SC.ModalContent>
    </ModalBase>
  );
};
