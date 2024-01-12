const MyStack = function () {
  this.mainQueue = [];
  this.helpQueue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  if (!this.mainQueue) {
    this.mainQueue.push(x);

    return;
  }

  this.helpQueue.push(x);

  while (this.mainQueue.length) {
    this.helpQueue.push(this.mainQueue.shift());
  }

  this.mainQueue = this.helpQueue;
  this.helpQueue = [];
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.mainQueue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.mainQueue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  if (this.mainQueue.length) {
    return false;
  }

  return true;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
