const addMinutes = (dateParam, amount) => {
  const date = new Date(dateParam);
  if (!amount) return date;
  date.setMinutes(date.getMinutes() + amount);
  return date;
};

module.exports = addMinutes;
