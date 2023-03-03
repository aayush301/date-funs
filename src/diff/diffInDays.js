const { millisecondsInDay } = require("../_lib/constants");

/**
 * @summary - Get the number of days (no. of 24-hr periods) between the given dates
 * @example
 * // How many days are between 2 July 2011 23:00:00 and 3 July 2011 11:00:00?
 * // => 0.5
 */
const diffInDays = (date1, date2, asFloat = false) => {
  const diff = (new Date(date1).getTime() - new Date(date2).getTime()) / millisecondsInDay;
  return asFloat ? diff : Math.trunc(diff);
};

module.exports = diffInDays;
