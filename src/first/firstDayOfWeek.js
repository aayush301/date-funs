const firstDayOfWeek = (dateParam, options = { weekStartsOn: 0 }) => {
  const date = new Date(dateParam);
  const { weekStartsOn } = options;
  const diff = (date.getDay() - weekStartsOn + 7) % 7;
  date.setDate(date.getDate() - diff);
  return date;
};

module.exports = firstDayOfWeek;
