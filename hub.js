'use strict';

function logEvent(event, payload) {
  const time = new Date();
  const loggedPayload = {
    event,
    time,
    payload,
  };
  console.log('EVENT', loggedPayload);
}

module.exports = { logEvent };
