/**
 *
 * @param date - The original date
 * @returns The start of a day
 *
 * @example
 * // What is the start of day for 2 Sept. 2014 11:55:00?
 * // => 2 Sept. 2014 00:00:00
 * startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 *
 */
const startOfDay = dateParam => {
  const date = new Date(dateParam);
  date.setHours(0, 0, 0, 0);
  return date;
};

module.exports = startOfDay;
