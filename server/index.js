'use strict';

const { Server } = require('socket.io');
const { logEvent } = require('../hub');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');

const server = new Server(PORT);

// create namespace
const caps = server.of('/caps');

const pickupQueue = new Queue();
const deliveredQueue = new Queue();

// connect to server
caps.on('connection', (socket) => {
  console.log('Socket connected to CAPS namespace!', socket.id);

  socket.on('JOIN', queueId => {
    socket.join(queueId);
    socket.emit('JOIN', queueId);
  });

  socket.on('PICKUP', (payload) => {
    const stored = { ...payload, clientId: socket.id };
    logEvent('pickup', stored);
    let currentQueue = pickupQueue.read(stored.orderID);
    if (!currentQueue) {
      let queueKey = pickupQueue.store(stored.orderID, stored);
      currentQueue = pickupQueue.read(queueKey);
      // TODO: make sure currentQueue is not null or undefined
    }
    socket.broadcast.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    logEvent('in-transit', payload);
  });

  socket.on('DELIVERED', (payload) => {
    logEvent('delivered', payload);
    let currentQueue = deliveredQueue.read(payload.orderID);
    if (!currentQueue) {
      let queueKey = deliveredQueue.store(payload.orderID, new Queue());
      currentQueue = deliveredQueue.read(queueKey);
      // TODO: make sure currentQueue is not null or undefined
    }
    socket.broadcast.emit('DELIVERED', payload);
  });

  socket.on('GETALL', (payload) => {
    logEvent('getAll', payload);
    let queueValues = [];
    if (payload.eventName === 'pickup') {
      queueValues = pickupQueue.getAll('all');
    } else if (payload.eventName === 'delivered') {
      queueValues = deliveredQueue.getAll(payload.store);
    }
    socket.to(payload.queueId).emit('GETALL', queueValues);
  });

  socket.on('RECEIVED', (payload) => {
    logEvent('received', payload);

    let queues = [pickupQueue, deliveredQueue];
    let queue = null;

    for (let i = 0; i < queues.length; i++) {
      if (queues[i].read(payload.orderID)) {
        queue = queues[i];
        break;
      }
    }

    if (!queue) {
      throw new Error('no queue found');
    }

    queue.remove(payload.orderID);
  });
});
