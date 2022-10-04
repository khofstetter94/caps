'use strict';

let eventPool = require('../eventPool');

module.exports = async (payload) => {
  console.log('Notified driver that package ready for pickup', {
    EVENT: {
      event: 'PICKUP',
      time: new Date(),
      payload: payload
    }
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  eventPool.emit('TRANSIT', payload);
}
