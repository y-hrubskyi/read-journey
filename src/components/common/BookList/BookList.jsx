import { BookItem } from '@/components/common/BookItem/BookItem';
import * as SC from './BookList.styled';

export const BookList = ({ books }) => {
  return (
    <SC.BookList>
      {books.map(book => (
        <BookItem key={book._id} book={book} />
      ))}
    </SC.BookList>
  );
};
