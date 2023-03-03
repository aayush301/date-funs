const firstMonthOfYear = dateParam => {
  const date = new Date(dateParam);
  date.setMonth(0);
  return date;
};

module.exports = firstMonthOfYear;
