const endOfQuarter = dateParam => {
  const date = new Date(dateParam);
  const month = (Math.floor(date.getMonth() / 3) + 1) * 3;
  date.setMonth(month, 0);
  date.setHours(23, 59, 59, 999);
  return date;
};

module.exports = endOfQuarter;
