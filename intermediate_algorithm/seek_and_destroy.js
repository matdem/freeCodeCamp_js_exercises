function destroyer(arr) {
  for (let i = 1; i < arguments.length; i++) {
    arr = arr.filter((x) => x !== arguments[i]);
  }

  return arr;
}

console.log(destroyer([1, 2, 3, "allo", 4], "allo", 3, 4));

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
