import { useState } from 'react';

import { BooksLimit } from '@/config/pagination/limits';
import { getDeviceType } from '@/utils/getDeviceType';

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const limit = BooksLimit[getDeviceType()];

  return { limit, page, setPage };
};
