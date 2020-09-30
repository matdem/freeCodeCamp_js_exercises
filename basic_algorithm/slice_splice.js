function frankenSplice(arr1, arr2, n) {
  // Copy arr2 to not affect it
  let frankenArr = [...arr2];
  for (let i = 0; i < arr1.length; i++) {
    frankenArr.splice(n + i, 0, arr1[i]);
  }
  return frankenArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // Expected [4, 1, 2, 3, 5, 6]
