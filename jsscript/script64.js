const makeElem = (kind) => document.createElementNS("http://www.w3.org/2000/svg", kind);
const setAttrib = (target, kind, value) => target.setAttribute(kind, value);
const svgSetup = (svgViewport, svgRect) => {
  let attributes = [
    [svgViewport, "width", window.innerWidth],
    [svgViewport, "height", window.innerHeight],
    [svgRect, "x", Math.floor(window.innerWidth / 10)],
    [svgRect, "y", Math.floor(window.innerHeight / 10)],
    [svgRect, "width", Math.floor(window.innerWidth / 10) * 8],
    [svgRect, "height", Math.floor(window.innerHeight / 10) * 8],
  ];
  for (const [a, b, c] of attributes) setAttrib(a, b, c);
};

window.addEventListener("load", (e) => {
  let svgViewport = makeElem("svg");
  let svgRect = makeElem("rect");
  svgViewport.setAttribute("id", "svgViewport");
  svgRect.setAttribute("id", "svgRectangle");
  svgSetup(svgViewport, svgRect);
  document.body.appendChild(svgViewport);
  svgViewport.appendChild(svgRect);
});

window.addEventListener("resize", (e) => {
  let svgViewport = document.getElementById("svgViewport");
  let svgRect = document.getElementById("svgRectangle");
  svgSetup(svgViewport, svgRect);
});
