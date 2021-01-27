const signal = (color) => (document.body.style.backgroundColor = color);
const choice = (number, content) => (document.getElementById(`choix${number}`).innerHTML = content);

document.getElementsByTagName("table")[0].addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
  if (e.target.innerHTML == "Faux") {
    signal("red");
  } else if (e.target.innerHTML == "Vrai") {
    signal("blue");
  }
  setTimeout(() => {
    signal("white");
    [1, 2, 3, 4].map((num) => choice(num, "Faux"));
    choice(Math.floor(Math.random() * 4 + 1), "Vrai");
  }, 1000);
});
