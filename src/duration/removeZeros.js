const removeZeros = duration => {
  const newDuration = {};
  for (const [key, value] of Object.entries(duration)) {
    if (value !== 0) newDuration[key] = value;
  }
  return newDuration;
};

module.exports = removeZeros;
