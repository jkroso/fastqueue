module.exports = Queue

function Queue() {
  this.head = [];
  this.tail = [];
  this.index = 0;
  this.headLength = 0;
  this.length = 0;
}

/**
 * Get an item from the front of the queue
 * 
 * @return {x}
 */

Queue.prototype.shift = function () {
	// swap head for tail
  if (this.index >= this.headLength) {
    var t = this.head;
    this.head = this.tail;
    this.tail = t;
    t.length = 0;
    this.index = 0;
    this.headLength = this.head.length;
    if (!this.headLength) return;
  }

  var value = this.head[this.index];
  // free the ref for GC
  if (this.index < 0) {
    delete this.head[this.index++];
  } else {
    this.head[this.index++] = null;
  }
  this.length--;
  return value;
};

/**
 * Insert a new item at the front of the queue.
 * 
 * @param {x} item
 * @return {this}
 */

Queue.prototype.unshift = function (item) {
  this.head[--this.index] = item;
  this.length++;
  return this;
};

/**
 * Push a new item on the end of the queue.
 * 
 * @param {x} item
 * @return {this}
 */

Queue.prototype.push = function (item) {
  this.length++;
  this.tail.push(item);
  return this;
};