/**
 * Performs bubble sort on the provided array in place.
 *
 * Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements, and swaps them if they are in the wrong order.
 * The pass through the list is repeated until the list is sorted. The algorithm
 * gets its name from the way smaller elements "bubble" to the top of the list.
 * Because it only uses comparisons to operate on elements, it is a comparison sort.
 * This implementation does not return a new array; it modifies the input array in place.
 *
 * @param {number[]} arr - The array to be sorted in place.
 * @modifies This function will modify the input array, sorting its elements in place.
 *
 * @example
 * // The array [5, 3, 1, 4, 2] will be sorted in place to [1, 2, 3, 4, 5]
 * const numbers = [5, 3, 1, 4, 2];
 * bubbleSort(numbers);
 * console.log(numbers); // Output: [1, 2, 3, 4, 5]
 */
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = n - 1; i > 0; i -= 1) {
    let flag = true;

    for (let j = 0; j < i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        flag = false;
      }
    }

    if (flag) {
      break;
    }
  }
}
