/**
 * @example
 * // Add 1 month to 25 Jan 2011
 * // => 25 Feb 2011
 *
 * // Add 1 month to 31 Jan 2011
 * // => 28 Feb 2011
 */
const addMonths = (dateParam, amount) => {
  const date = new Date(dateParam);
  if (!amount) return date;

  const endOfDesiredMonth = new Date(dateParam);
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  const daysInDesiredMonth = endOfDesiredMonth.getDate();
  if (date.getDate() >= daysInDesiredMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth());
    return date;
  }
};

module.exports = addMonths;
