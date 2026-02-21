interface Person {
  name: string;
  age: number;
  last: string;
  location?: string;
  data(): void;
}

function getInfo(person: Person) {
  console.log(`name: ${person.name} age: ${person.age} last: ${person.last}`);
  person.data();
}

const john: Person = {
  name: "Qaisar",
  age: 21,
  last: "Ali",
  data() {
    console.log(`hy everyone`);
  },
};

const ali: Person = {
  name: "Ahmed",
  age: 34,
  last: "Alex",
  data() {
    console.log(`hy ali`);
  },
};

getInfo(john);
getInfo(ali);
