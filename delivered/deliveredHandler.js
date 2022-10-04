'use strict';

let eventPool = require('../eventPool');

module.exports = async (payload) => {
  console.log('Package delivered', {
    EVENT: {
      event: 'DELIVERED',
      time: new Date(),
      payload: payload
    }
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  eventPool.emit('THANKYOU', payload);
}
