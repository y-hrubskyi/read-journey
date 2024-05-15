import { useModal } from "@/hooks/useModal";

import { BookModal } from "@/components/common/BookModal/BookModal";
import * as SC from "./BookItem.styled";

export const BookItem = ({ book }) => {
  const { isModalOpen, toggleModal } = useModal();

  return (
    <SC.BookCard>
      <SC.BookImg src={book.imageUrl} alt={book.title} onClick={toggleModal} />
      <SC.BookTitle>{book.title}</SC.BookTitle>
      <SC.BookAuthor>{book.author}</SC.BookAuthor>
      {isModalOpen && (
        <BookModal isOpen={isModalOpen} onClose={toggleModal} book={book} />
      )}
    </SC.BookCard>
  );
};
