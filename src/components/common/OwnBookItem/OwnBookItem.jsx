import { useDispatch } from "react-redux";

import { Icons } from "@/config/icons";
import { useModal } from "@/hooks/useModal";
import { removeFromLibraryById } from "@/store/books/operations";

import {
  BookCard,
  BookImg,
  BookTitle,
  BookAuthor,
} from "@/components/common/BookItem/BookItem.styled";
import { BookModal } from "@/components/common/BookModal/BookModal";

import * as SC from "./OwnBookItem.styled";

export const OwnBookItem = ({ book }) => {
  const { isModalOpen, toggleModal } = useModal();
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeFromLibraryById(book._id));
  };

  return (
    <BookCard>
      <BookImg src={book.imageUrl} alt={book.title} onClick={toggleModal} />
      <SC.InfoWrapper>
        <SC.AboutBook>
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>{book.author}</BookAuthor>
        </SC.AboutBook>
        <SC.RemoveBookBtn type="button" onClick={handleRemoveBook}>
          <SC.TrashIcon>
            <use href={Icons.trash}></use>
          </SC.TrashIcon>
        </SC.RemoveBookBtn>
      </SC.InfoWrapper>

      {isModalOpen && (
        <BookModal isOpen={isModalOpen} onClose={toggleModal} book={book} />
      )}
    </BookCard>
  );
};
