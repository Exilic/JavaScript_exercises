var svgCircle = document.getElementById("circle");
var svgText = document.getElementById("circleText");

function flipColor() {
  if (svgCircle.style.fill == "red") {
    svgCircle.style.fill = "blue";
    svgText.innerHTML = "Blue";
  } else {
    svgCircle.style.fill = "red";
    svgText.innerHTML = "Red";
  }
}

svgCircle.onclick = flipColor;
