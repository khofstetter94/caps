'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

const createHandleNotification = require('./handleNotification');
const handleNotification = createHandleNotification(socket);

socket.on('PICKUP', handleNotification);
