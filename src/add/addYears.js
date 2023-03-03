const addYears = (dateParam, amount) => {
  const date = new Date(dateParam);
  if (!amount) return date;
  date.setFullYear(date.getFullYear() + amount);
  return date;
};

module.exports = addYears;
