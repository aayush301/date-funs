const endOfYear = dateParam => {
  const date = new Date(dateParam);
  date.setFullYear(date.getFullYear() + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
};

module.exports = endOfYear;
