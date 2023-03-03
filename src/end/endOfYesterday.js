const endOfYesterday = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  date.setHours(23, 59, 59, 999);
  return date;
};

module.exports = endOfYesterday;
