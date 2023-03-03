const diffInMilliseconds = require("../diff/diffInMilliseconds");
const rescaleDuration = require("./rescaleDuration");

const intervalToDuration = ({ start, end }) => {
  const duration = { milliseconds: diffInMilliseconds(end, start) };
  return rescaleDuration(duration);
};

module.exports = intervalToDuration;
