let idCounter = 0;
const createSvg = (kind) => document.createElementNS("http://www.w3.org/2000/svg", kind);
const placeSvg = (where, svgItem) => document.getElementById(where).appendChild(svgItem);
const setSvgId = (svgItem) => svgItem.setAttribute("id", `svgElement${++idCounter}`);

let firstItem = createSvg("svg");
setSvgId(firstItem);
document.getElementsByTagName("body")[0].appendChild(firstItem);

["g", "g", "g"].forEach((i) => {
  let svgElement = createSvg(i);
  setSvgId(svgElement);
  placeSvg("svgElement1", svgElement);
});
