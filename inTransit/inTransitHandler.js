'use strict';

let eventPool = require('../eventPool');

module.exports = async (payload) => {
  console.log('Package picked up and in transit', {
    EVENT: {
      event: 'TRANSIT',
      time: new Date(),
      payload: payload
    }
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  eventPool.emit('DELIVERED', payload);
}
