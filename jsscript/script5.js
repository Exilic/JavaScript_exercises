let svg_1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg_1.setAttribute("viewport", "0 0 200 200");
document.querySelector("body").appendChild(svg_1);
let svg_circ1 = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle"
);
svg_circ1.setAttribute("cy", 80);
svg_circ1.setAttribute("cx", 80);
svg_circ1.setAttribute("r", 40);
svg_circ1.setAttribute("id", "svg_circ1");
svg_circ1.setAttribute("class", "svg-off");
document.getElementsByTagName("svg")[0].appendChild(svg_circ1);

function SwapStyle() {
  let currentStyle = document.getElementById("svg_circ1");
  console.log(currentStyle.getAttribute("class"));
  if (currentStyle.getAttribute("class") == "svg-on") {
    currentStyle.setAttribute("class", "svg-off");
  } else {
    currentStyle.setAttribute("class", "svg-on");
  }
}

document.getElementById("svg_circ1").addEventListener("click", SwapStyle);
