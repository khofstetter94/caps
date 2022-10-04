'use strict';

const eventPool = require('./eventPool');
const driverHandler = require('./driver/driverHandler');
const inTransitHandler = require('./inTransit/inTransitHandler');
const deliveredHandler = require('./delivered/deliveredHandler');
const vendorHandler = require('./vendor/vendorHandler');

eventPool.on('PICKUP', driverHandler);
eventPool.on('TRANSIT', inTransitHandler);
eventPool.on('DELIVERED', deliveredHandler);
eventPool.on('THANKYOU', vendorHandler);


setInterval(() => {
  console.log('---------new interval begins---------');
  console.log('An order comes in');
  eventPool.emit('PICKUP', {
    "store": "1-206-flowers",
    "customer": "KC",
  })
}, 3000)
