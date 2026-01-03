// Example 1:
let nums = [3, 6, 1, 0];
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:

// let nums = [1, 2, 3, 4];
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.

const dominantIndex = function (nums) {
  let max = -Infinity;
  console.log(-Infinity);
  let maxIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
      maxIndex = i;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex && max < 2 * nums[i]) {
      return -1;
    }
  }
  return maxIndex;
};
// console.log(dominantIndex(nums));

// Given an integer array nums, return the third distinct
// maximum number in this array. If the third maximum does not exist, return the maximum number.

var thirdMax = function (nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    // ignore duplicates
    if (num === first || num === second || num === third) {
      continue;
    }

    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }

  return third === -Infinity ? first : third;
};
// console.log(thirdMax(nums));

let s = ["h", "e", "l", "l", "o"];
// Output: ["o","l","l","e","h"]

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // swap
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
  return s
};
console.log(reverseString(s));
