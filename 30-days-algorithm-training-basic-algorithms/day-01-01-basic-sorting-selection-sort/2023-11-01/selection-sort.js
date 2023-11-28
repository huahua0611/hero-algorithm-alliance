/**
 * Performs selection sort on the provided array.
 *
 * The selection sort algorithm sorts an array by repeatedly finding the minimum element
 * (considering ascending order) from the unsorted part and putting it at the beginning.
 * The algorithm maintains two subarrays in a given array:
 * 1) The subarray which is already sorted.
 * 2) Remaining subarray which is unsorted.
 *
 * In every iteration of the selection sort, the minimum element from the unsorted subarray
 * is picked and moved to the sorted subarray.
 *
 * @param {number[]} arr - The array to be sorted.
 * @requires The `arr` must be an array of numbers.
 * @modifies This function will modify the input array, sorting its elements in place.
 * @example
 * returns the array [1, 2, 3, 4, 5]
 * selectionSort([3, 1, 4, 5, 2]);
 */
function selectionSort(arr) {
  // Function implementation goes here

  const n = arr.length;

  for (let i = 0; i < n - 1; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < n; j += 1) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }
}

const assert = require('assert'); // 引入Node.js的断言库

function testSelectionSort() {
  // Helper function to verify if the array is sorted in ascending order
  function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  }

  // Test Case 1: 空数组
  let array = [];
  selectionSort(array);
  assert.deepStrictEqual(array, []);

  // Test Case 2: 单一元素数组
  array = [1];
  selectionSort(array);
  assert.deepStrictEqual(array, [1]);

  // Test Case 3: 已经排序的数组
  array = [1, 2, 3, 4, 5];
  selectionSort(array);
  assert.ok(isSorted(array));

  // Test Case 4: 未排序的数组
  array = [3, 1, 4, 5, 2];
  selectionSort(array);
  assert.ok(isSorted(array));

  // Test Case 5: 包含负数和正数
  array = [-3, 1, -4, 5, 2];
  selectionSort(array);
  assert.ok(isSorted(array));

  // Test Case 6: 包含重复元素的数组
  array = [3, 1, 4, 5, 2, 2];
  selectionSort(array);
  assert.ok(isSorted(array));

  // Test Case 7: 较大的数组
  array = Array.from({ length: 1000 }, (_, i) => i % 50);
  selectionSort(array);
  assert.ok(isSorted(array));

  // Test Case 8: 包含相同元素的数组
  array = [5, 5, 5, 5, 5];
  selectionSort(array);
  assert.ok(isSorted(array));

  // Test Case 9: 逆序数组
  array = [5, 4, 3, 2, 1];
  selectionSort(array);
  assert.ok(isSorted(array));
}

testSelectionSort(); // 执行测试函数
