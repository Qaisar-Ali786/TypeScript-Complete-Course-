// Intersection type ?
// an intersection is a new way to combine multiple types into a single types that include all
// the properties and method of each type. an intersection type is denoted by & symbol.

type userInfo = {
  name: string;
  last: string;
  age: number;
};

type account = {
  id: number;
  password: number;
};

type detail = userInfo & account;

const shut: detail = {
  name: "Qaisar",
  last: "Ali",
  age: 21,
  id: 345,
  password: 45432,
};
console.log(shut);
