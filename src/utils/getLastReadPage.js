export const getLastReadPage = (sessions, totalPages) => {
  const lastReadingSession = sessions[sessions.length - 1];
  const readPages =
    lastReadingSession.finishPage ?? sessions[sessions.length - 2].finishPage;

  return readPages > totalPages ? totalPages : readPages;
};
