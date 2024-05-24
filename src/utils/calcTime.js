export const calcTime = (finishReading, startReading) =>
  Math.ceil((new Date(finishReading) - new Date(startReading)) / 1000 / 60);
