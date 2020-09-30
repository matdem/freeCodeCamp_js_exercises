function repeatStringNumTimes(str, num) {
  let repeatStr = "";
  for (let i = 0; i < num; i++) {
    repeatStr += str;
  }
  str = repeatStr;
  return str;
}

console.log(repeatStringNumTimes("abc", 3));
