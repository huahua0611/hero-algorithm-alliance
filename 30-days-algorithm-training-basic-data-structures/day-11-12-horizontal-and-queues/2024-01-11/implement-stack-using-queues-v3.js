const MyStack = function () {
  this.queue = [];
  this.count = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);

  for (let i = 0; i < this.count; i += 1) {
    this.queue.push(this.queue.shift());
  }

  this.count += 1;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  this.count -= 1;
  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  if (this.count) {
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
