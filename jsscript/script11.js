console.log(document.getElementsByTagName("img"));
let createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", "600");
createSVG.setAttribute("height", "304");
let footer = document.getElementsByTagName("footer")[0];
footer.insertBefore(createSVG, footer.children[0]);

window.addEventListener("click", function (e) {
  let createCircle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  createCircle.setAttribute("cy", e.pageY - 80);
  createCircle.setAttribute("cx", e.pageX);
  createCircle.setAttribute("r", Math.floor(Math.random() * 20) + 5);
  createCircle.setAttribute(
    "class",
    "color" + (Math.floor(Math.random() * 5) + 1)
  );
  document.getElementsByTagName("svg")[0].appendChild(createCircle);
});
