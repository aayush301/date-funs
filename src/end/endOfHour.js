const endOfHour = dateParam => {
  const date = new Date(dateParam);
  date.setMinutes(59, 59, 999);
  return date;
};

module.exports = endOfHour;
