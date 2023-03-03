const normalizeDuration = require("./normalizeDuration");
const removeZeros = require("./removeZeros");

/**
 * @summary Rescale units to its largest representation
 * @example Rescale {milliseconds:90000} => {minutes:1, seconds:30}
 */
const rescaleDuration = duration => {
  const { years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0 } = duration;
  return removeZeros(normalizeDuration({ years, months, days, hours, minutes, seconds, milliseconds }));
};

module.exports = rescaleDuration;
