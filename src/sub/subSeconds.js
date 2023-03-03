const addSeconds = require("../add/addSeconds");

const subSeconds = (dateParam, amount) => {
  return addSeconds(dateParam, -amount);
};

module.exports = subSeconds;
