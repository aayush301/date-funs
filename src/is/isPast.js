const isPast = dateParam => {
  return new Date(dateParam).getTime() < Date.now();
};

module.exports = isPast;
