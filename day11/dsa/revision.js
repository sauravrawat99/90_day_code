// bubble sort algorithm
// idea
// largest element comes to the end or array by swapping adjacent elementslet
arr1 = [64, 34, 25, 12, 22, 11, 63];
function bubble(arr1) {
  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = 0; j < arr1.length - i - 1; j++) {
      if (arr1[j] > arr1[j + 1]) {
        let temp = arr1[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = temp;
      }
    }
  }
  return arr1;
}
// console.log(bubble(arr1));

//Selection sort algorithm
// the selection sort algorithm work by dividing the array into two parts sorted and unsorted

// idia pick the smallest element from unsoeted array and swap put in the begining

let arr2 = [64, 25, 12, 22, 11];

function Selection(arr2) {
  for (let i = 0; i < arr2.length - 1; i++) {
    // ✅ FIX
    console.log("outer");

    let min = i;
    for (let j = i + 1; j < arr2.length; j++) {
      console.log("inner");

      if (arr2[min] > arr2[j]) {
        min = j;
      }
    }

    let temp = arr2[min];
    arr2[min] = arr2[i];
    arr2[i] = temp;

    console.log(arr2);
  }
  return arr2;
}

// console.log(Selection(arr2));

// the insertion sort working by dividing the array into two parts sorted and unsorted
// idea pick the element from unsorted array and put it in the correct position in sorted array
let arr3 = [12, 11, 13, 5, 6];

function insertion(arr3) {
  for (let i = 1; i < arr3.length; i++) {
    let curr = arr3[i];
    let prev = i - 1;

    while (prev >= 0 && arr3[prev] > curr) {
      arr3[prev + 1] = arr3[prev];
      prev--;
    }
    arr3[prev + 1] = curr;
  }
  return arr3;
}
// console.log(insertion(arr3));

// counting sort algorithm
// idea find the maximum element in the array create a count array of size
// max+1 and store the frequency of each element in the count array

// Sirf integers ke liye
// ✅ Mostly non-negative numbers
// ❌ Comparison based nahi hota (<, > use nahi karta)

let arr = [4, 2, 2, 8, 3, 3, 1];

function countingSort(arr) {
  let max = Math.max(...arr);
  let count = new Array(max + 1).fill(0);

  // count frequency
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // build sorted array
  let index = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[index] = i;
      index++;
      count[i]--;
    }
  }

  return arr;
}

console.log(countingSort([1, 4, 1, 2, 7, 5, 2]));
