const lastDayOfQuarter = dateParam => {
  const date = new Date(dateParam);
  const month = (Math.floor(date.getMonth() / 3) + 1) * 3;
  date.setMonth(month, 0);
  return date;
};

module.exports = lastDayOfQuarter;
