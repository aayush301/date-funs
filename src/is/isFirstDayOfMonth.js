const isFirstDayOfMonth = dateParam => {
  return new Date(dateParam).getDate() === 1;
};

module.exports = isFirstDayOfMonth;
