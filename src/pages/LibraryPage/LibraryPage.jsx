import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectOwnLibrary } from '~/store/books/selectors';
import { fetchOwnLibrary } from '~/store/books/operations';
import { usePagination } from '~/hooks/usePagination';

import { AddBook } from '~/components/AddBook/AddBook';
import { RecommendedBooks } from '~/components/RecommendedBooks/RecommendedBooks';
import {
  BookListPageContent,
  ContentWrapper,
  HeaderWrapper,
  PageTitle
} from '~/components/common/PageContent/PageContent.styled';
import { Paginator } from '~/components/common/Paginator/Paginator';
import { SelectBase } from '~/components/common/SelectBase/SelectBase';
import { BookList } from '~/components/common/BookList/BookList.styled';
import { OwnBookItem } from '~/components/common/OwnBookItem/OwnBookItem';
import { Loader } from '~/components/common/Loader/Loader';
import { Placeholder } from '~/components/common/Placeholder/Placeholder';
import { DarkenedText } from '~/components/common/Placeholder/Placeholder.styled';

import * as SC from './LibraryPage.styled';

const statusOptions = [
  { label: 'Unread', value: 'unread' },
  { label: 'In progress', value: 'in-progress' },
  { label: 'Done', value: 'done' },
  { label: 'All books', value: '' }
];

const LibraryPage = () => {
  const library = useSelector(selectOwnLibrary);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const { limit, page, setPage } = usePagination();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const searchParams = new URLSearchParams();
        if (status) searchParams.set('status', status);

        await dispatch(fetchOwnLibrary(searchParams)).unwrap();
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dispatch, status]);

  const selectStatus = value => {
    setPage(1);
    setStatus(value);
  };

  const paginatedLibrary = library.slice((page - 1) * limit, page * limit);

  const emptyData = paginatedLibrary.length === 0;
  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !isLoading && !error && !emptyData;
  const noData = !isLoading && !error && emptyData;

  const disabledPaginationBtns = noData || hasError;

  if (
    library.length > 0 &&
    paginatedLibrary.length === 0 &&
    library.length / limit < page
  ) {
    setPage(Math.ceil(library.length / limit));
  }

  return (
    <>
      <SC.Dashboard>
        <AddBook />
        <RecommendedBooks />
      </SC.Dashboard>
      <BookListPageContent>
        <HeaderWrapper>
          <PageTitle>My library</PageTitle>
          <SC.Controllers>
            <Paginator
              page={page}
              totalPages={Math.ceil(library.length / limit)}
              setPage={setPage}
              noContent={disabledPaginationBtns}
            />
            <SelectBase
              name="language"
              options={statusOptions}
              defaultValue={statusOptions[statusOptions.length - 1]}
              onChange={selectStatus}
            />
          </SC.Controllers>
        </HeaderWrapper>
        <ContentWrapper>
          {content && (
            <BookList>
              {paginatedLibrary.map(book => (
                <OwnBookItem
                  key={book._id}
                  book={book}
                  decrementPage={() => {}}
                />
              ))}
            </BookList>
          )}
          {loading && <Loader />}
          {hasError && <Placeholder>Oops... {error}</Placeholder>}
          {noData && (
            <Placeholder>
              To start training, add
              <DarkenedText> some of your books </DarkenedText>
              or from the recommended ones
            </Placeholder>
          )}
        </ContentWrapper>
      </BookListPageContent>
    </>
  );
};

export default LibraryPage;
