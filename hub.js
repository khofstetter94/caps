'use strict';

const eventPool = require('./eventPool');
const driverHandler = require('./driver/driverHandler');
const vendorHandler = require('./vendor/vendorHandler');

eventPool.on('PICKUP', driverHandler);
eventPool.on('THANKYOU', vendorHandler);

function logEvent(event, payload) {
  const time = new Date();
  const loggedPayload = {
    event,
    time,
    payload,
  };
  console.log('EVENT', loggedPayload);
}

module.exports = { logEvent };
