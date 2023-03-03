const addWeeks = (dateParam, amount) => {
  const date = new Date(dateParam);
  if (!amount) return date;
  date.setDate(date.getDate() + amount * 7);
  return date;
};

module.exports = addWeeks;
