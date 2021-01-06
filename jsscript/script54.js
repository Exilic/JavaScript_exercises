const equation = (x, y, z) => console.log(Math.pow(4, x) / y - z);

let numbers = [
  [5, 34, 17],
  [7, 56, 150],
  [6, 123, 12],
  [9, 2000, 100],
  [12, 12000, 500],
];

for (const [x, y, z] of numbers) equation(x, y, z);
