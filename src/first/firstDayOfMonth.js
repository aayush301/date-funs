const firstDayOfMonth = dateParam => {
  const date = new Date(dateParam);
  date.setDate(1);
  return date;
};

module.exports = firstDayOfMonth;
