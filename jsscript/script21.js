let createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", "200");
createSVG.setAttribute("height", "200");
document.getElementsByTagName("body")[0].appendChild(createSVG);

let createCircle = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle"
);
createCircle.setAttribute("cy", "50");
createCircle.setAttribute("cx", "65");
createCircle.setAttribute("r", "10");
document.getElementsByTagName("svg")[0].appendChild(createCircle);

var oldSVG;
var counter;

document.getElementById("remove").addEventListener("click", function (e) {
  let temporaryContainer = document.getElementsByTagName("svg")[0];
  if (temporaryContainer != undefined) {
    oldSVG = temporaryContainer.cloneNode(true);
    temporaryContainer.remove();
  }
});

document.getElementById("restore").addEventListener("click", function (e) {
  let temporaryContainer = document.getElementsByTagName("svg")[0];
  if (temporaryContainer == undefined) {
    document.getElementsByTagName("body")[0].appendChild(oldSVG);
  }
});
