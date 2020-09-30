function factorialize(num) {
  const max = num;
  for (let i = 1; i < max; i++) {
    num *= i;
  }
  return num;
}

console.log(factorialize(5));
