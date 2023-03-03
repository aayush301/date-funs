const addSeconds = (dateParam, amount) => {
  const date = new Date(dateParam);
  if (!amount) return date;
  date.setSeconds(date.getSeconds() + amount);
  return date;
};

module.exports = addSeconds;
