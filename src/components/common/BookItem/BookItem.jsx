import * as SC from "./BookItem.styled";

export const BookItem = ({ book }) => {
  return (
    <SC.BookCard>
      <SC.BookImg src={book.imageUrl} alt={book.title} />
      <SC.BookTitle>{book.title}</SC.BookTitle>
      <SC.BookAuthor>{book.author}</SC.BookAuthor>
    </SC.BookCard>
  );
};
