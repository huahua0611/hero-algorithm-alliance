/**
 * Performs insertion sort on the provided array.
 *
 * Insertion sort is a simple sorting algorithm that builds the final sorted array (or list)
 * one item at a time. It is much less efficient on large lists than more advanced algorithms
 * such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:
 * - Simple implementation.
 * - Efficient for small data sets.
 * - More efficient in practice than most other simple quadratic algorithms (i.e., bubble sort,
 *   selection sort).
 * - Adaptive, i.e., efficient for data sets that are already substantially sorted.
 *
 * The algorithm iterates over the array and at each iteration, it removes one element from the
 * input data, finds the location it belongs to within the sorted list, and inserts it there.
 * It repeats until no input elements remain.
 *
 * @param {number[]} arr - The array to be sorted.
 * @modifies This function will modify the input array, sorting its elements in place.
 *
 * @example
 * // The array [5, 2, 4, 6, 1, 3] will be sorted in place to [1, 2, 3, 4, 5, 6]
 * const numbers = [5, 2, 4, 6, 1, 3];
 * insertionSort(numbers);
 * console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
 */
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i += 1) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = current;
  }
}
