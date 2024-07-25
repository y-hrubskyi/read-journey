export const isToday = dateString => {
  const [day, month, year] = dateString.split('.').map(Number);

  const today = new Date();

  return (
    day === today.getDate() &&
    month === today.getMonth() + 1 &&
    year === today.getFullYear()
  );
};
