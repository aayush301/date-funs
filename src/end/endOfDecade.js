const endOfDecade = dateParam => {
  const date = new Date(dateParam);
  const year = date.getFullYear();
  const decadeEndYear = Math.floor(year / 10) * 10 + 9;
  date.setFullYear(decadeEndYear, 11, 31);
  date.setHours(23, 59, 59, 999);
  return date;
};

module.exports = endOfDecade;
