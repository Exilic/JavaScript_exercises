function CreateSVGElement(kind) {
  return document.createElementNS("http://www.w3.org/2000/svg", kind);
}

function AttributesSetting(target, attributesList) {
  for (let i = 0; i < attributesList.length; i++) {
    target.setAttribute(attributesList[i][0], attributesList[i][1]);
  }
}

function CreateFullSVGElement(kind, attributesList) {
  let createSVG = CreateSVGElement(kind);
  AttributesSetting(createSVG, attributesList);
  return createSVG;
}

document.getElementsByTagName("body")[0].appendChild(
  CreateFullSVGElement("svg", [
    ["width", window.innerWidth],
    ["height", window.innerHeight],
    ["id", "drawing-ground"],
  ])
);

document.getElementById("drawing-ground").appendChild(
  CreateFullSVGElement("circle", [
    ["cy", window.innerHeight / 2],
    ["cx", window.innerWidth / 2],
    ["r", "130px"],
    ["id", "centered-circle"],
  ])
);

window.addEventListener("resize", function (e) {
  let circleObject = document.getElementById("centered-circle");
  AttributesSetting(circleObject, [
    ["cy", window.innerHeight / 2],
    ["cx", window.innerWidth / 2],
  ]);
  let svgObject = document.getElementById("drawing-ground");
  AttributesSetting(svgObject, [
    ["width", window.innerWidth],
    ["height", window.innerHeight],
  ]);
});
