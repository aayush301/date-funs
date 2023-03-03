const firstDayOfDecade = dateParam => {
  const date = new Date(dateParam);
  const year = date.getFullYear();
  const decadeStartYear = Math.floor(year / 10) * 10;
  date.setFullYear(decadeStartYear, 0, 1);
  return date;
};

module.exports = firstDayOfDecade;
