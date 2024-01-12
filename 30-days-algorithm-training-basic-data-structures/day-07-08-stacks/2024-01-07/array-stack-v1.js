class ArrayStack {
  #data;

  #capacity;

  #size;

  #resize() {
    const tmp = this.#data;
    this.capacity *= 2;
    this.#data = new Array(this.#capacity).fill(undefined);

    for (let i = 0; i < this.#size; i += 1) {
      this.#data[i] = tmp[i];
    }
  }

  constructor(capacity) {
    this.#capacity = capacity;
    this.#data = new Array(this.#capacity).fill(undefined);
    this.#size = 0;
  }

  destroy() {
    this.#data = null;
    this.#capacity = null;
    this.#size = null;
  }

  push(element) {
    if (this.#size === this.#capacity) {
      this.#resize();
    }

    this.#data[this.#size] = element;
    this.#size += 1;
  }

  pop() {
    if (this.#size === 0) {
      throw new RangeError('This stack is empty');
    }

    this.#size -= 1;
    const returnElement = this.#data[this.#size];
    this.#data[this.#size] = undefined;

    return returnElement;
  }

  top() {
    if (this.#size === 0) {
      throw new RangeError('This stack is empty');
    }

    return this.#data[this.#size - 1];
  }

  getSize() {
    return this.#size;
  }
}

// 测试用例
function runTests() {
  // 创建栈实例
  const stack = new ArrayStack(2);

  // 测试基础操作
  console.log('---- 基础操作测试 ----');
  stack.push(1);
  console.log(`Expected top: 1, Actual top: ${stack.top()}`); // 应输出 1
  stack.push(2);
  console.log(`Expected size: 2, Actual size: ${stack.getSize()}`); // 应输出 2

  console.log(`Expected pop: 2, Popped: ${stack.pop()}`); // 应输出 2
  console.log(`Expected top after pop: 1, Actual top: ${stack.top()}`); // 应输出 1

  // 测试边界情况
  console.log('---- 边界情况测试 ----');
  try {
    while (true) {
      console.log(`Popped: ${stack.pop()}`);
    }
  } catch (e) {
    console.log(`Empty stack error caught: ${e.message}`); // 应捕获错误
  }

  // 测试扩容
  console.log('---- 扩容测试 ----');
  stack.push(3);
  stack.push(4);
  stack.push(5); // 触发扩容
  console.log(`Expected size after resizing: 3, Actual size: ${stack.getSize()}`); // 应输出 3
  stack.push(6);
  console.log(`Expected size after resizing: 4, Actual size: ${stack.getSize()}`); // 应输出 4
  console.log(`Expected top after resizing: 6, Actual top: ${stack.top()}`); // 应输出 6

  // 测试资源清理
  console.log('---- 资源清理测试 ----');
  stack.destroy();
  try {
    stack.top();
  } catch (e) {
    console.log(`Accessing destroyed stack error caught: ${e.message}`); // 应捕获错误
  }
}

runTests();
