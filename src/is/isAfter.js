const isAfter = (date1, date2) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  return dt1.getTime() > dt2.getTime();
};

module.exports = isAfter;
