let value, interest, residue;

[value, interest, ...residue] = [20000, 1.07, 30000, 23000, 800, 200, 1200];

console.log(value);
console.log(interest);
console.log(residue);

[value, interest, ...residue] = residue;

console.log(value);
console.log(interest);
console.log(residue);

[value, interest, ...residue] = residue;

console.log(value);
console.log(interest);
console.log(residue);
