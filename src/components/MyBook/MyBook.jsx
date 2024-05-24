import { Icons } from "@/config/icons";

import * as SC from "./MyBook.styled";

export const MyBook = ({ book, isReading }) => {
  return (
    <SC.Content>
      <SC.BookImg src={book.imageUrl} alt={book.title} />
      <SC.AboutBook>
        <SC.BookTitle>{book.title}</SC.BookTitle>
        <SC.BookAuthor>{book.author}</SC.BookAuthor>
      </SC.AboutBook>
      <SC.ActionIcon>
        <use href={Icons[isReading ? "stop" : "start"]}></use>
      </SC.ActionIcon>
    </SC.Content>
  );
};
