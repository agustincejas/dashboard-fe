export const MAX_DAYS = 10;

export const addDays = (date: Date, increment: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + increment);
  return newDate;
};
