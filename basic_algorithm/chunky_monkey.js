function chunkArrayInGroups(arr, size) {
  let chunkArray = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkArray.push(arr.slice(i, i + size));
  }
  return chunkArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 4));
