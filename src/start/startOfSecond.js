/**
 *
 * @param date - The original date
 * @returns The start of second
 *
 * @example
 * // What is the start of second for 2 Sept. 2014 11:55:35.700?
 * // => 2 Sept. 2014 11:55:35.0
 * startOfDay(new Date(2014, 8, 2, 11, 55, 35, 700))
 *
 */
const startOfSecond = dateParam => {
  const date = new Date(dateParam);
  date.setMilliseconds(0);
  return date;
};

module.exports = startOfSecond;
