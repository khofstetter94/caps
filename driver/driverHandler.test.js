'use strict';

const handleDriver = require('./driverHandler');
const eventPool = require('../eventPool');

jest.mock(eventPool, () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  }
});

describe('Handle Driver Test', () => {
  console.log = jest.fn();

  test('lag and emit ')
})
