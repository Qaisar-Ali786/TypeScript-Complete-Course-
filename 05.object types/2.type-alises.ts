// what is type alises ?
// in typescript, it is a new way to give a custom name to a type.
// it makes your code cleaner, reusable, and easier to understand.
// type aliese are defined using the type keyword followed by the name of alises.

// type User = {
//   name: string;
//   age: number;
//   last: string;
// };

// const printInfo = (user: User) => {
//   return `name: ${user.name}, age: ${user.age} last: ${user.last}`;
// };

// const result3 = printInfo({ name: "Qaisar", age: 21, last: "ali" });
// console.log(result3);

type User = {
  name: string;
  age: number;
  last: string;
};

const person: User = {
  name: "Qaisar",
  age: 21,
  last: "Ali",
};

console.log(person.name);
console.log(person["age"]);
