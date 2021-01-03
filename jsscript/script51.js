const savingsRate = (rate, years) => Math.pow(1 + rate / 100, years);

const savings = (amount, rate, years) => {
  let year = years - 1;
  let totalAmount = 0;
  while (year > 0) {
    totalAmount += amount * savingsRate(rate, year);
    year--;
  }
  console.log(totalAmount);
};

const percentYears = (amount) => savings(amount, 5, 10);

[10000, 25000, 40000].forEach(percentYears);
