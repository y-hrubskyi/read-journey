import { formatDate } from "@/utils/formatDate";

export const sortByDate = (array) => {
  const sortedByDate = array.reduce((acc, item) => {
    const date = formatDate(item.startReading);

    if (!acc[date]) {
      acc[date] = [item];
    } else {
      acc[date].push(item);
    }

    return acc;
  }, {});

  return Object.entries(sortedByDate).reverse();
};
