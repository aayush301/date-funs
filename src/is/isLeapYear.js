const isLeapYear = dateParam => {
  const year = new Date(dateParam).getFullYear();
  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  if (year % 400 !== 0) return false;
  return true;

  // one-liners:
  // return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  // return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};

module.exports = isLeapYear;
