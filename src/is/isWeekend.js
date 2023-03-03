const isWeekend = date => {
  const dt = new Date(date);
  const weekDay = dt.getDay();
  return weekDay === 0 || weekDay === 6;
};
module.exports = isWeekend;
