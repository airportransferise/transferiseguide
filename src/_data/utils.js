module.exports.pick = function (arr, seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return arr[Math.abs(hash) % arr.length];
};

module.exports.render = function (text, data) {
  return text
    .replace(/{{city}}/g, data.cityName)
    .replace(/{{airport}}/g, data.airportName)
    .replace(/{{district}}/g, data.districtName)
    .replace(/{{area}}/g, data.areaName);
};
