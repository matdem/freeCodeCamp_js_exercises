function titleCase(str) {
  let arrOfStr = str.split(" ");
  str = [];
  for (let word of arrOfStr) {
    let wordToChar = word.split("");
    let wordFormated = [];
    wordFormated.push(wordToChar[0].toUpperCase());
    for (let i = 1; i < wordToChar.length; i++) {
      wordFormated.push(wordToChar[i].toLowerCase());
    }
    str.push(wordFormated.join(""));
  }
  return str.join(" ");
}

console.log(titleCase("I'm a little tea pot")); // Expected "I'm A Little Tea Pot"
