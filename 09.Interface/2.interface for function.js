"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log(add(3, 5));
console.log(subtract(5, 8));
function getInfor(Car) {
    console.log(`brand: ${Car.brand} model: ${Car.model} year: ${Car.year}`);
}
const myCar = {
    brand: "honda",
    model: "city",
    year: 2023,
};
const get = getInfor(myCar);
//# sourceMappingURL=2.interface%20for%20function.js.map