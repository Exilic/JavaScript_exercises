var drawingLine = false;
var timedDrawing = 0;
var xOrigin = 0;
var yOrigin = 0;
var newPoints = "";

let createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", window.innerWidth);
createSVG.setAttribute("height", innerHeight);
document.getElementsByTagName("body")[0].appendChild(createSVG);

function drawPolyline() {
  if (!drawingLine) {
    let createPolyline = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polyline"
    );
    let firstTwoPoints =
      "" +
      xOrigin +
      ", " +
      yOrigin +
      " " +
      (xOrigin + 1) +
      ", " +
      (yOrigin + 1);
    createPolyline.setAttribute("points", firstTwoPoints);
    document.getElementsByTagName("svg")[0].appendChild(createPolyline);
    drawingLine = true;
  } else {
    let targetPolyline = document.getElementsByTagName("svg")[0]
      .lastElementChild;
    let newPolylinePoints = targetPolyline.getAttribute("points") + newPoints;
    targetPolyline.setAttribute("points", newPolylinePoints);
  }
}

window.addEventListener("mousedown", function (e) {
  if (!drawingLine) {
    xOrigin = e.pageX;
    yOrigin = e.pageY;
    drawPolyline();
  }
});

window.addEventListener("mousemove", function (e) {
  if (drawingLine) {
    let newPoints = " " + e.pageX + ", " + e.pageY;
    setTimeout(drawPolyline(), 400);
  }
});

window.addEventListener("mouseup", function (e) {
  drawingLine = false;
});
