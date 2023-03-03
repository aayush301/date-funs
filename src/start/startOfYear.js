/**
 *
 * @param date - The original date
 * @returns The start of year
 *
 * @example
 * // What is the start of year for 2 Sept. 2014 11:55:00?
 * // => 1 Jan 2014 00:00:00
 * startOfYear(new Date(2014, 8, 2, 11, 55, 0))
 *
 */
const startOfYear = dateParam => {
  const date = new Date(dateParam);
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
};

module.exports = startOfYear;
