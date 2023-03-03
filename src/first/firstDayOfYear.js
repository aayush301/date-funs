const firstDayOfYear = dateParam => {
  const date = new Date(dateParam);
  date.setMonth(0, 1);
  return date;
};

module.exports = firstDayOfYear;
