export const getLastReadPage = (sessions, totalPages) => {
  if (
    sessions.length === 0 ||
    (sessions.length === 1 && sessions[0].status === "active")
  ) {
    return 1;
  }

  const lastReadingSession = sessions[sessions.length - 1];
  const readPages =
    lastReadingSession.finishPage ?? sessions[sessions.length - 2].finishPage;

  return readPages > totalPages ? totalPages : readPages;
};
