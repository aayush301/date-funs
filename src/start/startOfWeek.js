/**
 *
 * @param date - The original date
 * @returns The start of week
 *
 * @example
 * // What is the start of week for 2 Sept. 2014 11:55:00?
 * // => Sun 31 Aug. 2014 00:00:00
 * startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 *
 */
const startOfWeek = (dateParam, options = { weekStartsOn: 0 }) => {
  const date = new Date(dateParam);
  const { weekStartsOn } = options;
  const diff = (date.getDay() - weekStartsOn + 7) % 7;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
};

module.exports = startOfWeek;
