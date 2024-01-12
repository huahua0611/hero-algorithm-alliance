/**
 * Initialize your data structure here.
 */
const MyQueue = function () {
  this.mainData = [];
  this.emptyData = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.mainData.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let n = this.mainData.length;

  if (n === 1) {
    return this.mainData.pop();
  }

  while (n > 1) {
    this.emptyData.push(this.mainData.pop());
    n -= 1;
  }

  const result = this.mainData.pop();

  n = this.emptyData.length;

  while (n > 0) {
    this.mainData.push(this.emptyData.pop());
    n -= 1;
  }

  return result;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.mainData[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.mainData.length) {
    return false;
  }

  return true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
