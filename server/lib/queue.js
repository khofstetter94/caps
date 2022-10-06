'use strict';

class Queue {
  constructor() {
    this.data = {};
  }

  store(key, value){
    this.data[key] = value;
    return key;
  }

  read(key){
    return this.data[key];
  }

  getAll(clientId) {
    let keys = Object.keys(this.data).filter(queueId => {
      return this.data[queueId].store === clientId || clientId === 'all';
    });
    return keys.map(key => this.data[key]);
  }

  remove(key){
    console.log('something got removed!');
    let value = this.data[key];
    delete this.data[key];
    return value;
  }
}

module.exports = Queue;
