/**
 *
 * @param date - The original date
 * @returns The start of hour
 *
 * @example
 * // What is the start of hour for 2 Sept. 2014 11:55:00?
 * // => 2 Sept. 2014 11:00:00
 * startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 *
 */
const startOfHour = dateParam => {
  const date = new Date(dateParam);
  date.setMinutes(0, 0, 0);
  return date;
};

module.exports = startOfHour;
