document.getElementsByTagName("table")[0].addEventListener("change", (e) => {
  let row = e.target.id.slice(0, 2);
  let rowSum = number(`${row}c1`) + number(`${row}c2`) + number(`${row}c3`);
  let column = e.target.id.slice(2, 4);
  let columnSum = number(`r1${column}`) * number(`r2${column}`) * number(`r3${column}`);
  document.getElementById(`sum${row.slice(1, 2)}`).innerHTML = rowSum;
  document.getElementById(`product${column.slice(1, 2)}`).innerHTML = columnSum;
});

const number = (id) => Number(document.getElementById(id).value);
