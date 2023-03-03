const lastMonthOfYear = dateParam => {
  const date = new Date(dateParam);
  date.setFullYear(date.getFullYear() + 1, -1);
  return date;
};

module.exports = lastMonthOfYear;
