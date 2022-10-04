'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log(`Thank you, ${payload.customer}`, {
    EVENT: {
      event: 'THANKYOU',
      time: new Date(),
      payload: payload
    }
  });
}
