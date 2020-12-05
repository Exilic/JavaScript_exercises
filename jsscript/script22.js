function AttributeSetting(target, attributesList) {
  for (let attrib = 0; attrib < attributesList.length; attrib++) {
    target.setAttribute(attributesList[attrib][0], attributesList[attrib][1]);
  }
}

function CreateSVGElement(kind) {
  return document.createElementNS("http://www.w3.org/2000/svg", kind);
}

function SVGForAppend(kind, attributesList) {
  let svgElement = CreateSVGElement(kind);
  AttributeSetting(svgElement, attributesList);
  return svgElement;
}

document.getElementsByTagName("body")[0].appendChild(
  SVGForAppend("svg", [
    ["width", window.innerWidth],
    ["height", window.innerHeight],
    ["id", "present-window"],
  ])
);

document.getElementsByTagName("svg")[0].appendChild(
  SVGForAppend("circle", [
    ["cy", "100"],
    ["cx", "70"],
    ["r", "30"],
    ["class", "red-circle"],
  ])
);

window.addEventListener("resize", function (e) {
  AttributeSetting(document.getElementById("present-window"), [
    ["width", e.target.innerWidth],
    ["height", e.target.innerHeight],
  ]);
});
