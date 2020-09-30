// Function that return the index that a number should be in a given array.

function getIndexToIns(arr, num) {
  if (arr === []) {
    num = 0;
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i <= arr.length; i++) {
    if (num === arr[i]) {
      num = i;
      break;
    } else if (num > arr[i]) {
      continue;
    } else {
      num = i;
      break;
    }
  }
  return num;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // Expected 1
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([40, 30], 50));
console.log(getIndexToIns([], 50));
