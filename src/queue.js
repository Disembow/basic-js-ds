const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  };

  getUnderlyingList() {
    return this.first;
  };

  enqueue( value ) {
    const last = this.last;
    const elem = {value: value, next: null};
    if (last) {
      last.next = elem;
      this.last = elem;
    } else {
      this.first = elem;
      this.last = elem;
    };
  };

  dequeue() {
    const elem = this.first;
    if (!elem) {
      return null;
    };
    if (this.last === elem) {
      this.first = null;
      this.last = null;
    } else {
      this.first = elem.next;
    };
    return elem.value;
  };
};

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue);
queue.dequeue();
queue.dequeue();
console.log(queue);

module.exports = {
  Queue
};
