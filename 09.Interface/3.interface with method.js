"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo(person) {
    console.log(`name: ${person.name} age: ${person.age} last: ${person.last}`);
    person.data();
}
const john = {
    name: "Qaisar",
    age: 21,
    last: "Ali",
    data() {
        console.log(`hy everyone`);
    },
};
const ali = {
    name: "Ahmed",
    age: 34,
    last: "Alex",
    data() {
        console.log(`hy ali`);
    },
};
getInfo(john);
getInfo(ali);
//# sourceMappingURL=3.interface%20with%20method.js.map