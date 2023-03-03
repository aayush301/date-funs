const lastDayOfMonth = dateParam => {
  const date = new Date(dateParam);
  date.setMonth(date.getMonth() + 1, 0);
  return date;
};

module.exports = lastDayOfMonth;
