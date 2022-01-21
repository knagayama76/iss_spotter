"use strict";

const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPasstime = function (data) {
  for (const time of data) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPasstime(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work:", error.message);
  });
