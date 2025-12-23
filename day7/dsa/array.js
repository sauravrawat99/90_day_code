// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17
let accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
function maximumWealth(accounts) {
  let maximum = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;

    for (let cos = 0; cos < accounts[i].length; cos++) {
      sum += accounts[i][cos];
    }

    if (sum > maximum) {
      maximum = sum;
    }
  }
  return maximum;
}
// console.log(maximumWealth(accounts));

let nums = [555, 901, 482, 1771];
var findNumbers = function (nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums[i].length; j++) {
      count++;
      console.log(nums);
    }
    if (count % 2 === 0) {
      total++;
    }
  }
  return total;
};
console.log(findNumbers(nums));
