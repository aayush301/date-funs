/**
 * @summary - Get the number of calendar years between the given dates
 * @example
 * // How many calendar years are between 31 Dec 2013 and 11 Feb 2015?
 * // =>
 */
const diffInCalendarYears = (date1, date2) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  return dt1.getFullYear() - dt2.getFullYear();
};

module.exports = diffInCalendarYears;
