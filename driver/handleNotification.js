'use strict';

module.exports = (socket) => (payload) => {
  console.log('pickup', payload.orderID);
  socket.emit('IN-TRANSIT', payload);
  setTimeout(() => {
    console.log('delivered', payload.orderID);
    socket.emit('DELIVERED', payload);
  }, 1000);
};
