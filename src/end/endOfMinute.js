const endOfMinute = dateParam => {
  const date = new Date(dateParam);
  date.setSeconds(59, 999);
  return date;
};

module.exports = endOfMinute;
