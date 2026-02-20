// What is void?
// in typescript, a void is special type that represent the absence
// of value.it is usually used for functions that does't return
// anything.
function get(name: string): void {
  console.log(`helo my name is ${name}`);
}

get("Qaisar");
