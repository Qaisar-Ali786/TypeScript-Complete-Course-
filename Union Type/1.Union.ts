// union are used to declare a type that can have one of several possible types
// union are useful when we want to allow a variable or parameter to accept multiple types.

type info = {
  name: string;
  age: number;
};

type accountHold = {
  id: number;
  password: number;
};

const getInfo: info | accountHold = {
  id: 345,
  password: 34567,
};

console.log(getInfo);
