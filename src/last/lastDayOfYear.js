const lastDayOfYear = dateParam => {
  const date = new Date(dateParam);
  date.setFullYear(date.getFullYear() + 1, 0, 0);
  return date;
};

module.exports = lastDayOfYear;
