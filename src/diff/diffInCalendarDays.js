const { millisecondsInDay } = require("../_lib/constants");
const startOfDay = require("../start/startOfDay");

/**
 * @summary - Get the number of calendar days between the given dates
 * @example
 * // How many calendar days are between 2 July 2011 23:00:00 and 3 July 2011 01:01:00?
 * // => 1
 */
const diffInCalendarDays = (date1, date2) => {
  const day1Start = startOfDay(date1);
  const day2Start = startOfDay(date2);
  const time1 = day1Start.getTime();
  const time2 = day2Start.getTime();
  return Math.round((time1 - time2) / millisecondsInDay);
};

module.exports = diffInCalendarDays;
