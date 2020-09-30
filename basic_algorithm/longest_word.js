function findLongestWordLength(str) {
  const words = str.split(" ");
  str = words[0];
  for (let word of words) {
    if (word.length > str.length) {
      str = word;
    }
  }
  return str.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
