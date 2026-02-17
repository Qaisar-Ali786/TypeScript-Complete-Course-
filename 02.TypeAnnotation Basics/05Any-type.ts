// What is anytype?
// in typescript, anyType is a special type that automatically
// turn off the type checking for a variable. when you declare
// a variable as any you can assign value of any type to it
// like number, string, bolean

let color: any = 12;
color = "red";

console.log(color);
