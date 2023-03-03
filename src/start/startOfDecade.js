/**
 *
 * @param date - The original date
 * @returns The start of decade
 *
 * @example
 * // What is the start of decade for 2 Sept. 2014 11:55:00?
 * // => 1 Jan 2010 00:00:00
 * startOfDecade(new Date(2014, 8, 2, 11, 55, 0))
 *
 */
const startOfDecade = dateParam => {
  const date = new Date(dateParam);
  const year = date.getFullYear();
  const decadeStartYear = Math.floor(year / 10) * 10;
  date.setFullYear(decadeStartYear, 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
};

module.exports = startOfDecade;
