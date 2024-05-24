export const calcProgress = (readPages, totalPages) =>
  ((readPages * 100) / totalPages).toFixed(2);
