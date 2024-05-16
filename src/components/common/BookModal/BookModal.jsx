import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { ModalTypes } from "@/config/modals";
import { selectOwnLibrary } from "@/store/books/selectors";
import { addToLibraryById } from "@/store/books/operations";

import { ModalBase } from "@/components/common/ModalBase/ModalBase";
import * as SC from "./BookModal.styled";

export const BookModal = ({ isOpen, onClose, book }) => {
  const library = useSelector(selectOwnLibrary);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBookActionClick = async () => {
    if (isOwn) {
      return navigate(`/reading/${book._id}`);
    }

    try {
      const addingBookPromise = dispatch(addToLibraryById(book._id)).unwrap();
      await toast.promise(addingBookPromise, {
        loading: "Adding...",
        success: "Added to library!",
        error: (error) => error,
      });
    } catch (error) {
      // handled in toast.promise
    }
  };

  const isOwn = library.find((ownBook) => book._id === ownBook._id);

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} type={ModalTypes.CONTENT}>
      <SC.BookImg src={book.imageUrl} alt={book.title} />
      <SC.BookTitle>{book.title}</SC.BookTitle>
      <SC.BookAuthor>{book.author}</SC.BookAuthor>
      <SC.BookPages>
        {book.totalPages} {book.totalPages === 1 ? "page" : "pages"}
      </SC.BookPages>
      <SC.ActionBookBtn type="button" onClick={handleBookActionClick}>
        {isOwn ? "Start reading" : "Add to library"}
      </SC.ActionBookBtn>
    </ModalBase>
  );
};
