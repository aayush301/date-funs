/**
 *
 * @param date - The original date
 * @returns The start of quarter
 *
 * @example
 * // What is the start of quarter for 2 Sept. 2014 11:55:00?
 * // => 1 July 2014 00:00:00
 * startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 *
 */
const startOfQuarter = dateParam => {
  const date = new Date(dateParam);
  const month = date.getMonth() - (date.getMonth() % 3);
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
};

module.exports = startOfQuarter;
