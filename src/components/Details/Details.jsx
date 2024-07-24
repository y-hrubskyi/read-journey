import { Progress } from './Progress/Progress';
import { Diary } from './Diary/Diary';
import { Statistics } from './Statistics/Statistics';

export const Details = ({ book, setBook, detailsType, setDetailsType }) => {
  switch (detailsType) {
    case 'progress':
      return <Progress />;
    case 'diary':
      return (
        <Diary
          book={book}
          setBook={setBook}
          detailsType={detailsType}
          setDetailsType={setDetailsType}
        />
      );
    case 'statistics':
      return (
        <Statistics
          book={book}
          detailsType={detailsType}
          setDetailsType={setDetailsType}
        />
      );
    default:
      return null;
  }
};
