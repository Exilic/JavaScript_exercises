const numberBase = [
  [
    [3, 4],
    [45, 61],
  ],
  [
    [28, 45],
    [14, 56],
  ],
];

function addNumbers(numbers) {
  let sum = 0;
  for (const number in numbers) {
    sum += numbers[number];
  }
  return sum;
}

function presentSum(item) {
  return item.map(addNumbers);
}

let summationStep = numberBase.map(presentSum);
summationStep = summationStep.map(addNumbers);
console.log(addNumbers(summationStep));
