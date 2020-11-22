var startLine = false;
var continueLine = false;
var xOrigin = 0;
var xCoordinate = 0;
var yOrigin = 0;
var yCoordinate = 0;

let createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", window.innerWidth);
createSVG.setAttribute("height", window.innerHeight);
document.querySelector("body").appendChild(createSVG);

function drawLine() {
  if (startLine && !continueLine) {
    let createLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    createLine.setAttribute("x1", xOrigin);
    createLine.setAttribute("y1", yOrigin);
    createLine.setAttribute("x2", xCoordinate);
    createLine.setAttribute("y2", yCoordinate);
    createLine.setAttribute(
      "class",
      "color" + (Math.floor(Math.random() * 7) + 1)
    );
    document.getElementsByTagName("svg")[0].appendChild(createLine);
  } else if (continueLine) {
    let createLine = document.getElementsByTagName("svg")[0].lastElementChild;
    createLine.setAttribute("x2", xCoordinate);
    createLine.setAttribute("y2", yCoordinate);
  }
}

window.addEventListener("mousedown", function (e) {
  if (!startLine) {
    startLine = true;
    xOrigin = e.pageX;
    yOrigin = e.pageY;
    xCoordinate = e.pageX + 1;
    yCoordinate = e.pageY + 1;
    drawLine();
  }
});

window.addEventListener("mousemove", function (e) {
  if (startLine) {
    continueLine = true;
    xCoordinate = e.pageX;
    yCoordinate = e.pageY;
    drawLine();
  }
});

window.addEventListener("mouseup", function (e) {
  if (startLine) {
    startLine = false;
    continueLine = false;
  }
});
