const addLeadingZeros = (number, targetLength) => {
  const sign = number < 0 ? "-" : "";
  return sign + Math.abs(number).toString().padStart(targetLength, "0");
};

module.exports = addLeadingZeros;
