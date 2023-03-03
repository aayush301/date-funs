const { millisecondsInWeek } = require("../_lib/constants");
const startOfWeek = require("../start/startOfWeek");

/**
 * @summary - Get the number of calendar weeks between the given dates
 * @example
 * // How many calendar weeks are between 5 July 2014(sat) and 20 July 2014(Sun)?
 * // => 3
 */
const diffInCalendarWeeks = (date1, date2, options = { weekStartsOn: 0 }) => {
  const { weekStartsOn } = options;
  const dt1 = startOfWeek(date1, { weekStartsOn });
  const dt2 = startOfWeek(date2, { weekStartsOn });

  const time1 = dt1.getTime();
  const time2 = dt2.getTime();
  return Math.round((time1 - time2) / millisecondsInWeek);
};

module.exports = diffInCalendarWeeks;
