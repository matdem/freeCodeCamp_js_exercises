function findElement(arr, func) {
  let num = 0;
  for (let i of arr) {
    if (func(i)) {
      num = i;
      break;
    } else {
      num = undefined;
    }
  }

  return num;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
