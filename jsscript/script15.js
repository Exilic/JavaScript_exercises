var xOrigin;
var yOrigin;
var state = 0;
var createCircle;
var createPath;

var createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", window.innerWidth);
createSVG.setAttribute("height", window.innerHeight);
document.getElementsByTagName("body")[0].appendChild(createSVG);

function drawingCircle(x, y) {
  let distance = Math.sqrt(
    Math.pow(x - xOrigin, 2) + Math.pow(y - yOrigin, 2),
    2
  );
  createCircle.setAttribute("cy", yOrigin);
  createCircle.setAttribute("cx", xOrigin);
  createCircle.setAttribute("r", distance);
  createPath.setAttribute(
    "d",
    "M " + xOrigin + " " + yOrigin + " L " + x + " " + y
  );
}

window.addEventListener("resize", function (e) {
  createSVG.setAttribute("width", window.innerWidth);
  createSVG.setAttribute("height", window.innerHeight);
});

window.addEventListener("mousedown", function (e) {
  if (state == 0) {
    xOrigin = e.pageX;
    yOrigin = e.pageY;
    state = 1;
  }
});

window.addEventListener("mousemove", function (e) {
  if (state == 1) {
    createCircle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    createPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    drawingCircle(e.pageX, e.pageY);
    document.getElementsByTagName("svg")[0].appendChild(createCircle);
    document.getElementsByTagName("svg")[0].appendChild(createPath);
    state = 2;
  } else if (state == 2) {
    drawingCircle(e.pageX, e.pageY);
  }
});

window.addEventListener("mouseup", function (e) {
  state = 0;
});
