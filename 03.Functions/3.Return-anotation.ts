// What is return annotation?
// the return annotation is when you declare the type of value
// a function will return. this tell typeScript what type to
// expect from the function.

function addition(x: number): number {
  return x * x;
}

const res1 = addition(4);
console.log(res1);
