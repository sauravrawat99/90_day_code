// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

const nums1 = [1, 2, 3, 4];
let runningSum = function (nums1) {
  let Sum = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    Sum += nums[i];
    result.push(Sum);
  }
  return result;
};
// console.log(runningSum(nums1));

// Given an array nums of n integers where nums[i]
//  is in the range [1, n], return an array of all the
// integers in the range [1, n] that do not appear in nums.

const nums = [1, 1];
var findDisappearedNumbers = function (nums) {
  let result = [];
  let seen = new Array(nums.length + 1).fill(false);
  console.log(seen);

  // mark present numbers
  for (let i = 0; i < nums.length; i++) {
    seen[nums[i]] = true;
  }
  console.log(seen);

  // check missing numbers
  for (let i = 1; i <= nums.length; i++) {
    if (!seen[i]) {
      result.push(i);
    }
  }

  return result;
};
console.log(findDisappearedNumbers(nums));
