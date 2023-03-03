const isFuture = dateParam => {
  return new Date(dateParam).getTime() > Date.now();
};

module.exports = isFuture;
