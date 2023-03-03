/**
 * @summary - Are the given dates in the same month (in the same year)?
 */
const isSameMonth = (date1, date2) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  return dt1.getFullYear() === dt2.getFullYear() && dt1.getMonth() === dt2.getMonth();
};

module.exports = isSameMonth;
