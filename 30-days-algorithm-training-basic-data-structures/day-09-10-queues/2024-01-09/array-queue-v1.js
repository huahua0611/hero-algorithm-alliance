class ArrayQueue {
  #data;

  #front;

  #rear;

  #capacity;

  #resize() {
    const tmp = this.#data;
    this.#capacity *= 2;
    this.#data = new Array(this.#capacity).fill(undefined);
    for (let i = 0; i < this.#rear; i += 1) {
      this.#data[i] = tmp[i];
    }
  }

  constructor(capacity) {
    this.#data = new Array(capacity).fill(undefined);
    this.#front = 0;
    this.#rear = 0;
    this.#capacity = capacity;
  }

  destroy() {
    this.#data = null;
    this.#front = null;
    this.#rear = null;
    this.#capacity = null;
  }

  enqueue(element) {
    if (this.#rear === this.#capacity) {
      this.#resize();
    }

    this.#data[this.#rear] = element;
    this.#rear += 1;
  }

  dequeue() {
    if (this.#front === this.#rear) {
      throw new RangeError('This Queue is empty');
    }
    const dequeueElement = this.#data[this.#front];
    this.#front += 1;
    return dequeueElement;
  }

  getFront() {
    if (this.#front === this.#rear) {
      throw new RangeError('This Queue is empty');
    }

    return this.#data[this.#front];
  }

  getSize() {
    return this.#rear - this.#front;
  }
}

// 创建一个初始容量为 2 的队列
const queue = new ArrayQueue(2);

// 入队操作
queue.enqueue(10);
queue.enqueue(20);

// 检查大小，应为 2
console.log(`Size after enqueue: ${queue.getSize()}`); // 期望输出: 2

queue.enqueue(30);
queue.enqueue(40);

// 检查大小，应为 4
console.log(`Size after enqueue: ${queue.getSize()}`); // 期望输出: 4

// 出队操作，并检查返回值
console.log(`Dequeued: ${queue.dequeue()}`); // 期望输出: 10

// 检查队首元素
console.log(`Front element: ${queue.getFront()}`); // 期望输出: 20

// 再次出队，并检查队列大小
console.log(`Dequeued: ${queue.dequeue()}`); // 期望输出: 20

queue.dequeue();
queue.dequeue();
console.log(`Size after dequeue: ${queue.getSize()}`); // 期望输出: 0

// 尝试从空队列中出队（应抛出异常）
try {
  queue.dequeue();
} catch (e) {
  console.log(e.toString()); // 期望输出: RangeError: This Queue is empty
}

// 销毁队列
queue.destroy();
