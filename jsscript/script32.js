let target = document.getElementsByTagName("p")[0];
let space = false;

window.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(space);
  if (e.key == "Backspace") {
    target.innerText = target.innerText.slice(0, target.innerText.length - 1);
  } else if (e.key == " ") {
    space = true;
  } else {
    if (space) {
      target.innerText += " " + e.key;
      space = false;
    } else {
      target.innerText += e.key;
    }
  }
});
