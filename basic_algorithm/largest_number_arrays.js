function largestOfFour(arr) {
  let arrOfLargestNum = [];
  let largestNum;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      largestNum = arr[i][j];
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    arrOfLargestNum.push(largestNum);
  }
  arr = arrOfLargestNum;
  return arr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); // Expected: [5,27,39,1001]

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
