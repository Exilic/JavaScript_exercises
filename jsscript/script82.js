document.getElementsByTagName("main")[0].addEventListener("click", (e) => {
  console.log(e.target);
  ["+", "-", "/", "*"].forEach((operator) => Count(operator, e.target));
});

const Count = (operator, target) => {
  let numbers = target.innerText.split(operator);
  if (numbers.length > 1) console.log(operator);
};
