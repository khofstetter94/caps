'use-strict';

const { createVendorEvent, createVendor } = require('./index');
const Chance = require('chance');

const chance = new Chance();
const socket = createVendor();
const store = '1-800-Flowers';
const queueId = chance.guid();

socket.emit('JOIN', queueId);
socket.on('JOIN', (id) => {
  console.log('Joined Client Queue', id);
});

socket.emit('GETALL', {
  eventName: 'delivered',
  store,
  queueId,
});

socket.on('GETALL', payload => {
  socket.emit('RECEIVED', payload);
});

setInterval(() => {
  createVendorEvent(socket, store);
}, 3000);
