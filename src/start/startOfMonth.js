/**
 *
 * @param date - The original date
 * @returns The start of month
 *
 * @example
 * // What is the start of month for 2 Sept. 2014 11:55:00?
 * // => 1 Sept. 2014 11:55:00
 * startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 *
 */
const startOfMonth = dateParam => {
  const date = new Date(dateParam);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
};

module.exports = startOfMonth;
