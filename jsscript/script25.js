function MakeSVGElement(kind) {
  return document.createElementNS("http://www.w3.org/2000/svg", kind);
}

function AttributesSetting(target, attributesList) {
  for (let i = 0; i < attributesList.length; i++) {
    target.setAttribute(attributesList[i][0], attributesList[i][1]);
  }
}

function MakeFullSVGElement(kind, attributesList) {
  let createSVG = MakeSVGElement(kind);
  AttributesSetting(createSVG, attributesList);
  return createSVG;
}

document.getElementsByTagName("body")[0].appendChild(
  MakeFullSVGElement("svg", [
    ["width", window.innerWidth],
    ["height", window.innerHeight],
    ["id", "drawing-ground"],
  ])
);

document
  .getElementById("drawing-ground")
  .appendChild(MakeFullSVGElement("g", [["id", "arrow-group"]]));

document.getElementById("arrow-group").appendChild(MakeSVGElement("defs"));

document.getElementsByTagName("defs")[0].appendChild(
  MakeFullSVGElement("marker", [
    ["id", "arrowhead"],
    ["markerWidth", "10"],
    ["markerHeight", "7"],
    ["refX", "0"],
    ["refY", "3.5"],
    ["orient", "auto"],
  ])
);

document
  .getElementsByTagName("marker")[0]
  .appendChild(MakeFullSVGElement("polygon", [["points", "0 0, 10 3.5, 0 7"]]));

document.getElementById("arrow-group").appendChild(
  MakeFullSVGElement("line", [
    ["x1", "0"],
    ["y1", "50"],
    ["x2", "250"],
    ["y2", "50"],
  ])
);
