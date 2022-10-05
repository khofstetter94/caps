'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002'); // add namespace when created

const Chance = require('chance');
const chance = new Chance();

const createPackageNotification = require('./newPackage');
const vendorHandler = require('./vendorHandler');
const newPackage = createPackageNotification(socket);

socket.on('DELIVERED', vendorHandler);

setInterval(() => {
  newPackage({
    store: chance.company(),
    orderID: chance.guid(),
    customer: chance.first(),
    address: chance.address()
  });
}, 3000);
