// what is multidemenstions array
// The multideminstions array is an array contain other inside it  most commounly
// 2d array (array to arrays) it can also be 3d and 4d array

// ex 1d Array
let arr = [1, 2, 3, 4];

// multidemenstionl array
let metrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let n = 3;
let m = 3;
let TwoDarray = Array(n)
  .fill(0)
  .map(() => Array(m).fill(0));
// console.log(TwoDarray);

// Actual Memory Representation (Conceptual)
// arr
//  ├── reference → [1, 2, 3]
//  ├── reference → [4, 5, 6]
//  └── reference → [7, 8, 9]

let array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
}
// console.log(array.length);

// Spiral Matrix kya hota hai?
// idea right->Down->Left->Up
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function spiralMatrix(matrix) {
  let result = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 1️⃣ left → right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // 2️⃣ top → bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]); // ✅ FIX
    }
    right--;

    // 3️⃣ right → left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // 4️⃣ bottom → top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}
console.log(spiralMatrix(matrix));

// dia gonalsum
// Matrix ke diagonal elements ka sum.
// 1️⃣ Primary Diagonal → left-top se right-bottom
// 2️⃣ Secondary Diagonal → right-top se  left-bottom
let matrix2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
function diagonalSum(matrix2) {
  let sum = 0;
  let primarydi = 0;

  for (let i = 0; i < matrix2.length; i++) {
    sum += matrix2[i][i];
    sum += matrix2[i][matrix2.length - 1 - i];
  }
  if (matrix2.length % 2 !== 0) {
    let mid = Math.floor(matrix2.length / 2);
    console.log(mid);
    sum -= matrix2[mid][mid];
  }
  return sum;
}
console.log(diagonalSum(matrix2));

//search in sorted matrix
// Short Notes (Exam Ready)
// Rows & Columns sorted
// Start from top-right
// Left if big, down if small
// Time: O(n + m)
// Space: O(1)

let matrix3 = [
  [1, 4, 7, 11],
  [2, 5, 8, 12],
  [3, 6, 9, 16],
  [10, 13, 14, 17],
];
let target = 17;
function searchMatrix(matrix3, target) {
  let row = 0;
  let col = matrix3[0].length - 1;

  while (row < matrix3.length && col >= 0) {
    if (matrix3[row][col] === target) {
      return true;
    } else if (matrix3[row][col] > target) {
      col--; // left
    } else {
      row++; // down
    }
  }
  return false;
}

console.log(searchMatrix(matrix3, target)); // true
