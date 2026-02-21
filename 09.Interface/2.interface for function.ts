interface mathOperator {
  (x: number, y: number): number;
}

const add: mathOperator = (a, b) => a + b;
const subtract: mathOperator = (a, b) => a - b;

console.log(add(3, 5));
console.log(subtract(5, 8));

interface car {
  brand: string;
  model: string;
  year: number;
}

function getInfor(Car: car): void {
  console.log(`brand: ${Car.brand} model: ${Car.model} year: ${Car.year}`);
}

const myCar: car = {
  brand: "honda",
  model: "city",
  year: 2023,
};

const get = getInfor(myCar);
