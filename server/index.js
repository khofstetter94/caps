'use strict';

const { Server } = require('socket.io');
const { logEvent } = require('../hub');
const PORT = process.env.PORT || 3002;

const server = new Server(PORT);

// create namespace
const caps = server.of('/caps');

// connect to server
caps.on('connection', (socket) => {
  console.log('Socket connected to CAPS namespace!', socket.id);

  socket.on('PICKUP', (payload) => {
    logEvent('pickup', payload);

    socket.broadcast.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    logEvent('in-transit', payload);
  });

  socket.on('DELIVERED', (payload) => {
    logEvent('delivered', payload);
    socket.broadcast.emit('DELIVERED', payload);
  });
});