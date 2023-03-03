const startOfSecond = require("../start/startOfSecond");

/**
 * @summary - Are the given dates in the same second (in the same minute of same hour of same day of same month of same year)?
 */
const isSameSecond = (date1, date2) => {
  const day1SecStart = startOfSecond(date1);
  const day2SecStart = startOfSecond(date2);
  return day1SecStart.getTime() === day2SecStart.getTime();
};

module.exports = isSameSecond;
