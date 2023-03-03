const addDays = (dateParam, amount) => {
  const date = new Date(dateParam);
  if (!amount) return date;
  date.setDate(date.getDate() + amount);
  return date;
};

module.exports = addDays;
