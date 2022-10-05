'use strict';

module.exports = (socket) => (payload) => {
  // console.log('New Package: ', text);
  socket.emit('PICKUP', payload);
};
