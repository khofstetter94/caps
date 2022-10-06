'use strict';

const { io } = require('socket.io-client');
const vendorHandler = require('./vendorHandler');
const Chance = require('chance');
const createPackageNotification = require('./newPackage');

function createVendor() {
  const socket = io('http://localhost:3002/caps');
  socket.on('DELIVERED', vendorHandler);
  return socket;
};

function createVendorEvent(socket, store) {
  const chance = new Chance();
  const newPackage = createPackageNotification(socket);

  newPackage({
    store,
    orderID: chance.guid(),
    customer: chance.first(),
    address: chance.address(),
  });
}

module.exports = { createVendor, createVendorEvent };
