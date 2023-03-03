const endOfMonth = dateParam => {
  const date = new Date(dateParam);
  date.setMonth(date.getMonth() + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
};

module.exports = endOfMonth;
