// Default parameter value
// default paramter value is a value that function automatically takes
// if no argument is passed for it when a function is called

function personGreet(name = "Qaisar Ali") {
  return `helo ${name}`;
}
const result = personGreet();
console.log(result);
