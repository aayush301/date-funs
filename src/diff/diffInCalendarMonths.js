/**
 * @summary - Get the number of calendar months between the given dates
 * @example
 * // How many calendar months are between 31 Jan 2014 and 1 Sept 2014?
 * // => 8
 */
const diffInCalendarMonths = (date1, date2) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  const yearDiff = dt1.getFullYear() - dt2.getFullYear();
  const monthDiff = dt1.getMonth() - dt2.getMonth();
  return yearDiff * 12 + monthDiff;
};

module.exports = diffInCalendarMonths;
