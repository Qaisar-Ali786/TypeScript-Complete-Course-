// you can make a certain property optional in object type by adding a question mark after the property
// name.

type person = {
  name: string;
  age: number;
  location?: string;
  readonly residence: string;
};

const information: person = {
  name: "Qaisar",
  age: 32,
  location: "MZ",
  residence: "hu",
};

information.name = "ahmed";

console.log(information);
