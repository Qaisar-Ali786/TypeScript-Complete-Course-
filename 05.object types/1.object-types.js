"use strict";
//  what is object in typescript?
// an object in typescript is a structured data type that represent the collection of properties
// each with a key and an associated value.the properties of an object can have a specific type
// and an object itself can be annotated with a type
Object.defineProperty(exports, "__esModule", { value: true });
// const person: { name: string; last: string; age: number } = {
//   name: "Qaisar",
//   last: "ali",
//   age: 21,
// };
// console.log(person);
// for function that return an object
// function printInfo(): { name: string; last: string; age: number } {
//   return {
//     name: "alex",
//     last: "ahmed",
//     age: 32,
//   };
// }
// const get = printInfo();
// console.log(get);
function print(person) {
    console.log(`${person.name}, ${person.age}, ${person.last}`);
}
const result = print({ name: "Qaisar", age: 21, last: "Ali" });
//# sourceMappingURL=1.object-types.js.map