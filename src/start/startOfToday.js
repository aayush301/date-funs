/**
 *
 * @returns The start of today
 *
 * @example
 * // If today is 2 Sept. 2014 11:55, What is the start of today?
 * // => 2 Sept. 2014 00:00:00
 * startOfToday()
 *
 */
const startOfToday = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
};

module.exports = startOfToday;
