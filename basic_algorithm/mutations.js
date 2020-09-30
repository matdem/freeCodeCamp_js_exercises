function mutation(arr) {
  const word1 = arr[0].toLowerCase();
  const word2 = arr[1].toLowerCase();
  let uniqueLetter = [];
  let count = 0;
  for (let ch of word1) {
    if (uniqueLetter.includes(ch)) {
      continue;
    } else {
      uniqueLetter.push(ch);
    }
  }
  for (let i = 0; i < word2.length; i++) {
    for (let j = 0; j < uniqueLetter.length; j++) {
      if (word2[i] === uniqueLetter[j]) {
        count += 1;
      } else {
        continue;
      }
    }
  }
  if (count === word2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(mutation(["hello", "Hle"]));

// freeCodeCamp Solution #1 (Procedural)
/* function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
} */
