const startOfMinute = require("../start/startOfMinute");

/**
 * @summary - Are the given dates in the same minute (in the same hour of same day of same month of same year)?
 */
const isSameMinute = (date1, date2) => {
  const day1MinStart = startOfMinute(date1);
  const day2MinStart = startOfMinute(date2);
  return day1MinStart.getTime() === day2MinStart.getTime();
};

module.exports = isSameMinute;
