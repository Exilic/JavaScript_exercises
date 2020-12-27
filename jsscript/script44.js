function multiplying() {
  console.log(this.number * 4);
}

let term1 = { number: 56, multiplying: multiplying },
  term2 = { number: 13, multiplying: multiplying },
  term3 = { number: 89, multiplying: multiplying };

term1.multiplying();
term2.multiplying();
term3.multiplying();
