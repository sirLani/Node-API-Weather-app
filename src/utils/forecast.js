const request = require("request");

const forecast = (location, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ffc2b1c5607c2d1d522b5d177285b8ea&query=" +
    location;

  request({url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "it is currently" + " " + body.current.temperature + " " + "degrees out"
      );
    }
  });
};

module.exports = forecast;
