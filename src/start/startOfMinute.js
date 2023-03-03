/**
 *
 * @param date - The original date
 * @returns The start of minute
 *
 * @example
 * // What is the start of minute for 2 Sept. 2014 11:55:58?
 * // => 2 Sept. 2014 11:55:00
 * startOfDay(new Date(2014, 8, 2, 11, 55, 58))
 *
 */
const startOfMinute = dateParam => {
  const date = new Date(dateParam);
  date.setSeconds(0, 0);
  return date;
};

module.exports = startOfMinute;
