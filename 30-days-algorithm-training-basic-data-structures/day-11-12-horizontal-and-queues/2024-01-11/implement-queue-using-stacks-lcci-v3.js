/**
 * Initialize your data structure here.
 */
const MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.outStack.length) {
    this.inStack2outStack();
  }

  return this.outStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.outStack.length) {
    this.inStack2outStack();
  }

  return this.outStack[this.outStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inStack.length === 0 && this.outStack.length === 0;
};

/**
 * Transfer inStack to outStack.
 * @return {void}
 */
MyQueue.prototype.inStack2outStack = function () {
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
