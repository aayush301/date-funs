const endOfWeek = (dateParam, options = { weekStartsOn: 0 }) => {
  const date = new Date(dateParam);
  const { weekStartsOn } = options;
  const diff = 6 - ((date.getDay() - weekStartsOn + 7) % 7);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
};

module.exports = endOfWeek;
