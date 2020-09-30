function confirmEnding(str, target) {
  const lenTarget = target.length;
  const lenStr = str.length;
  const subStrStart = lenStr - lenTarget;
  if (str.substring(subStrStart, lenStr) === target) {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding("Bastian", "an"));
console.log(confirmEnding("Congratulation", "on"));

