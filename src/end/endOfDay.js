/**
 *
 * @param date - The original date
 * @returns The end of a day
 *
 * @example
 * // What is the end of day for 2 Sept. 2014 11:55:00?
 * // => 2 Sept. 2014 23:59:59.999
 * endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 *
 */
const endOfDay = dateParam => {
  const date = new Date(dateParam);
  date.setHours(23, 59, 59, 999);
  return date;
};

module.exports = endOfDay;
