// print of 7 that is in 2d array out 2
let array = [
  [4, 7, 8],
  [8, 8, 7],
];
function counting(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 7) {
        count++;
      }
    }
  }
  return count;
}
console.log(counting(array));
