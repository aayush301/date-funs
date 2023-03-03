const isWithinInterval = (date, { start, end }) => {
  const time = new Date(date).getTime();
  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();
  if (!(startTime <= endTime)) {
    throw new RangeError("Invalid interval");
  }

  return time >= startTime && time <= endTime;
};

module.exports = isWithinInterval;
