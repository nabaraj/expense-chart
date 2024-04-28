export const getDay = (): string => {
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const today = new Date().getDay();

  return days[today];
};
