export default class Queue {
  constructor(array) {
    this.queue = array;
  }
  getLength() {
    return this.queue.length;
  }
  enqueue(item) {
    this.queue.push(item);
    return item;
  }
  dequeue() {
    return this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
}
