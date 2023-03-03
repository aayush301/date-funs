const startOfDay = require("../start/startOfDay");

/**
 * @summary - Are the given dates in the same day (and month and year)?
 */
const isSameDay = (date1, date2) => {
  const day1Start = startOfDay(date1);
  const day2Start = startOfDay(date2);
  return day1Start.getTime() === day2Start.getTime();
};

module.exports = isSameDay;
