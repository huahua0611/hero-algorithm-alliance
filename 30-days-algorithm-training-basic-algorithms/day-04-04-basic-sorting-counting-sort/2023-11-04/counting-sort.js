/**
 * Performs counting sort on the provided array.
 *
 * Counting sort is a non-comparison sorting algorithm that operates in O(n + k) time,
 * where n is the number of elements in the input array and k is the range of input.
 * It works by counting the number of occurrences of each element and using that information
 * to construct a sorted output sequence.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 *
 * @example
 * // The array [4, 2, 1, 5, 3] will be sorted to [1, 2, 3, 4, 5]
 * const numbers = [4, 2, 1, 5, 3];
 * const sortedNumbers = countingSort(numbers);
 * console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]
 */
function countingSort(arr) {
  const max = Math.max(...arr);

  const tmp = new Array(max + 1).fill(0);

  arr.forEach((element) => {
    tmp[element] += 1;
  });

  let i = 0;

  tmp.forEach((element, index) => {
    while (element > 0) {
      arr[i] = index;
      i += 1;
      element -= 1;
    }
  });
}
