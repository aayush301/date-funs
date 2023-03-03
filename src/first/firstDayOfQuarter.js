const firstDayOfQuarter = dateParam => {
  const date = new Date(dateParam);
  const month = date.getMonth() - (date.getMonth() % 3);
  date.setMonth(month, 1);
  return date;
};

module.exports = firstDayOfQuarter;
