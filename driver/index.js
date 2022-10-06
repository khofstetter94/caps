'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const Chance = require('chance');

const chance = new Chance();
const createHandleNotification = require('./handleNotification');
const handleNotification = createHandleNotification(socket);

const queueId = chance.guid();

socket.emit('JOIN', queueId);
socket.on('JOIN', (id) => {
  console.log('Joined Client Queue', id);
});

socket.on('PICKUP', handleNotification);

socket.emit('GETALL', {
  eventName: 'pickup',
  queueId,
});

socket.on('GETALL', payload => {
  console.log(`Got pickup order: ${payload.orderID}`);
  socket.emit('RECEIVED', payload);
});
