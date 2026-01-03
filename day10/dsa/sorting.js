// insertion sort algorithm
// the insersions sort algorithm work dividing the array into two parts sorted and unsorted

let arr = [64, 34, 55, 67, 20, 10];
// insertion(arr); this work becuase function expression

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// console.log(insertionSort(arr));
/*
| Feature          | Bubble        | Selection  | Insertion      | Counting            |
| ---------------- | ------------- | ---------- | -------------- | ------------------- |
| Type             | Comparison    | Comparison | Comparison     | **Non-comparison**  |
| Core Idea        | Swap adjacent | Select min | Shift + insert | Count frequency     |
| Best Case Time   | O(n)          | O(n²)      | **O(n)**       | **O(n + k)**        |
| Avg Case Time    | O(n²)         | O(n²)      | O(n²)          | O(n + k)            |
| Worst Case Time  | O(n²)         | O(n²)      | O(n²)          | O(n + k)            |
| Space Complexity | O(1)          | O(1)       | O(1)           | ❌ **O(k)**          |
| Stable           | ✅ Yes         | ❌ No       | ✅ Yes          | ✅ Yes               |
| Adaptive         | ❌ No          | ❌ No       | ✅ Yes          | ❌ No                |
| In-place         | ✅ Yes         | ✅ Yes      | ✅ Yes          | ❌ No                |
| Best Use Case    | Learning      | Swaps kam  | Nearly sorted  | Small range numbers |
*/

// count sort algoritham
// Thr counting sort algorithm is a non-comparison based sorting algorithm
//  that works by counting the occurrences of each unique element in the input array.

let arr2 = [4, 2, 2, 8, 3, 3, 1];
function countingSort(arr) {
  let max = Math.max(...arr2);
  let count = new Array(max + 1).fill(0);

  //   frequncy
  for (let i = 0; i < arr2.length; i++) {
    count[arr2[i]]++;
  }
  let index = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr2[index] = i;
      index++;
      count[i]--;
    }
  }
  return arr2;
}

console.log(countingSort(arr2));
