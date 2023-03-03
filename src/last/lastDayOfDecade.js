const lastDayOfDecade = dateParam => {
  const date = new Date(dateParam);
  const year = date.getFullYear();
  const decadeEndYear = Math.floor(year / 10) * 10 + 9;
  date.setFullYear(decadeEndYear + 1, 0, 0);
  return date;
};

module.exports = lastDayOfDecade;
