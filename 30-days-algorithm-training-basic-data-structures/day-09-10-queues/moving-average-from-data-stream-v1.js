/**
 * Initialize your data structure here.
 * @param {number} size
 */
const MovingAverage = function (size) {
  this.size = size;
  this.queue = [];
  this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.queue.length < this.size) {
    this.queue.push(val);
    this.sum += val;
    return this.sum / this.queue.length;
  }

  this.queue.push(val);
  const n = this.queue.length;
  let sum = 0;
  for (let i = n - this.size; i < n; i += 1) {
    sum += this.queue[i];
  }
  return sum / this.size;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
