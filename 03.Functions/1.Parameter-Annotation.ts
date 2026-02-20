// What is function parameter annotation
// in typeScript, a function parameter annotation is when you
// declare the type of function's parameter, this tell the typescript
// what type of argument a function expects.

function add(num: number) {
  return num + 3;
}
const res = add(5);
console.log(res);
