const addMilliseconds = (dateParam, amount) => {
  const date = new Date(dateParam);
  if (!amount) return date;
  date.setMilliseconds(date.getMilliseconds() + amount);
  return date;
};

module.exports = addMilliseconds;
