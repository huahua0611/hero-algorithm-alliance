const CQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.outStack.length) {
    if (!this.inStack.length) {
      return -1;
    }

    this.inStack2outStack();
  }

  return this.outStack.pop();
};

/**
 * Transfer inStack to outStack.
 * @return {void}
 */
CQueue.prototype.inStack2outStack = function () {
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
