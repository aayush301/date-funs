const addHours = (dateParam, amount) => {
  const date = new Date(dateParam);
  if (!amount) return date;
  date.setHours(date.getHours() + amount);
  return date;
};

module.exports = addHours;
