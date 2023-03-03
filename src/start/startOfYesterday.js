/**
 *
 * @returns The start of yesterday
 *
 * @example
 * // If today is 1 Sept. 2014 11:55, What is the start of yesterday?
 * // => 31 Aug. 2014 00:00:00
 * startOfYesterday()
 *
 */
const startOfYesterday = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  date.setHours(0, 0, 0, 0);
  return date;
};

module.exports = startOfYesterday;
