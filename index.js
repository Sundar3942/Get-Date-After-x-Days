let addDays = require("date-fns/addDays");

let afterAddingDays = function (params) {
  const newDate = addDays(new Date(2020, 07, 22), params);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
module.exports = afterAddingDays;
