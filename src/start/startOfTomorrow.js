/**
 *
 * @returns The start of tomorrow
 *
 * @example
 * // If today is 2 Sept. 2014 11:55, What is the start of tomorrow?
 * // => 3 Sept. 2014 00:00:00
 * startOfTomorrow()
 *
 */
const startOfTomorrow = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  return date;
};

module.exports = startOfTomorrow;
