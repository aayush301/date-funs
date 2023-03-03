const isLastDayOfMonth = dateParam => {
  const date = new Date(dateParam);
  date.setDate(date.getDate() + 1);
  return date.getDate() === 1;
};

module.exports = isLastDayOfMonth;
