// A touple is a type that represent an array with fine number of element where each element can
// have different type. in touple, the order of types matter.

let myTouple: [number, string];
myTouple = [2, "get"];
console.log(myTouple);

const product: (number | string)[] = [234, "ajkwj"];

console.log(product);

const games: [string, string, string] = ["game1", "game2", "game3"];

console.log(games);
