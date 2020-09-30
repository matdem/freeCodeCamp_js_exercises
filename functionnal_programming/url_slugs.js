// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  return title
    .split(" ")
    .filter((word) => word !== "")
    .map((word) => word[0].toLowerCase().concat(word.slice(1)))
    .join("-");
}

console.log(urlSlug(globalTitle));
console.log(urlSlug(" Winter Is  Coming"));
