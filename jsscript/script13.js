let createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", "800");
createSVG.setAttribute("height", "600");
document.getElementsByTagName("body")[0].appendChild(createSVG);

var xStart;
var yStart;
var xEnd;
var yEnd;
var xControl1;
var yControl1;
var stage = 0;
var svgObject;
var svgAttribute;

window.addEventListener("click", function (e) {
  if (stage == 0) {
    svgObject = document.createElementNS("http://www.w3.org/2000/svg", "path");
    xStart = e.pageX;
    yStart = e.pageY;
    stage = 1;
  } else if (stage == 1) {
    xEnd = e.pageX;
    yEnd = e.pageY;
    svgAttribute = "M" + xStart + " " + yStart + " L" + xEnd + " " + yEnd;
    svgObject.setAttribute("d", svgAttribute);
    document.getElementsByTagName("svg")[0].appendChild(svgObject);
    stage = 2;
  } else if (stage == 2) {
    xControl1 = e.pageX;
    yControl1 = e.pageY;
    svgAttribute =
      "M" +
      xStart +
      " " +
      yStart +
      " Q" +
      xControl1 +
      " " +
      yControl1 +
      " " +
      xEnd +
      " " +
      yEnd;
    svgObject.setAttribute("d", svgAttribute);
    stage = 3;
  } else {
    svgAttribute =
      "M" +
      xStart +
      " " +
      yStart +
      " C" +
      xControl1 +
      " " +
      yControl1 +
      " " +
      e.pageX +
      " " +
      e.pageY +
      " " +
      xEnd +
      " " +
      yEnd;
    svgObject.setAttribute("d", svgAttribute);
    stage = 0;
  }
});
