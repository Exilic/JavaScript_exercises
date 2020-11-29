var loopSVG;

let createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", "400");
createSVG.setAttribute("height", "300");
document.getElementsByTagName("body")[0].appendChild(createSVG);

document
  .getElementsByTagName("svg")[0]
  .addEventListener("mouseenter", function (e) {
    loopSVG = setInterval(drawCircle, 400);
  });

document
  .getElementsByTagName("svg")[0]
  .addEventListener("mouseleave", function (e) {
    clearInterval(loopSVG);
  });

function drawCircle() {
  let createCircle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  createCircle.setAttribute("cx", Math.floor(Math.random() * 400));
  createCircle.setAttribute("cy", Math.floor(Math.random() * 300));
  createCircle.setAttribute("r", Math.floor(Math.random() * 100));
  createCircle.setAttribute(
    "fill",
    "rgba(" +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.random().toFixed(1)
  );
  document.getElementsByTagName("svg")[0].appendChild(createCircle);
}
