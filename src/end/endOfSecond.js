const endOfSecond = dateParam => {
  const date = new Date(dateParam);
  date.setMilliseconds(999);
  return date;
};

module.exports = endOfSecond;
