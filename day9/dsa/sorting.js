/*
what is sorting
soreting is the process of arranging data in a particular order,
 typically in ascending or descending order. 
 It helps in organizing data for easier retrieval and analysis.

 basic sorting algorithms
    1. Bubble Sort
    2. Selection Sort
    3. Insertion Sort
 */
// what is Bubble sort
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
// compares adjacent elements and swaps them if they are in the wrong order.

let arr = [64, 34, 25, 12, 22, 11, 90];
function bubbleSort(arr) {
  let n = arr.length;
  let outer = 0;
  let inner = 0;
  for (let i = 0; i < n; i++) {
    console.log(outer++);

    for (let j = 0; j < n - i - 1; j++) {
      console.log(inner++);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(bubbleSort(arr));

//  what is selection sort
// Selection sort is a simple sorting algorithm that divides the input list into two parts:
// a sorted sublist of items which is built up from left to right at the front (left) of the list,
// and a sublist of the remaining unsorted items that occupy the rest of the list.
// Initially, the sorted sublist is empty and the unsorted sublist is the entire input list.
// The algorithm proceeds by finding the smallest (or largest, depending on sorting order)
// element in the unsorted sublist, exchanging it with the leftmost element in the unsorted sublist,
// and moving the boundary of the sorted sublist one element to the right.

let arr1 = [64, 25, 12, 22, 11];
function selectionSort(arr) {
  let n = arr1.length;
  let outer = 0;
  let inner = 0;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    console.log(outer++);

    for (let j = i + 1; j < n; j++) {
      console.log(inner++);
      console.log("this is j:", arr1[j]);

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    let temp = arr1[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort(arr1));

