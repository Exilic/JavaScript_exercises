function MakeSVGElement(kind) {
  return document.createElementNS("http://www.w3.org/2000/svg", kind);
}

function AttributesSetting(target, attributesList) {
  for (let i = 0; i < attributesList.length; i++) {
    target.setAttribute(attributesList[i][0], attributesList[i][1]);
  }
}

function MakeFullSvgElement(kind, attributesList) {
  let createSvg = MakeSVGElement(kind);
  AttributesSetting(createSvg, attributesList);
  return createSvg;
}

function ChildOfElementId(parent, child) {
  document.getElementById(parent).appendChild(child);
}

function BasicSetUp() {
  document.getElementsByTagName("body")[0].appendChild(
    MakeFullSvgElement("svg", [
      ["height", "768"],
      ["width", window.innerWidth],
      ["id", "drawing-ground"],
    ])
  );
  ChildOfElementId(
    "drawing-ground",
    MakeFullSvgElement("defs", [["id", "svg-symbols"]])
  );
  ChildOfElementId(
    "drawing-ground",
    MakeFullSvgElement("g", [["id", "drawing-data"]])
  );
  ChildOfElementId(
    "svg-symbols",
    MakeFullSvgElement("circle", [
      ["cy", "0"],
      ["cx", "0"],
      ["r", "10"],
      ["id", "point-indicator"],
    ])
  );
}

BasicSetUp();

window.addEventListener("click", function (e) {
  let calc = Math.floor(e.pageY / 3);
  let color = `rgb(${calc}, ${calc}, ${calc})`;
  console.log(color);
  ChildOfElementId(
    "drawing-data",
    MakeFullSvgElement("use", [
      ["x", e.pageX],
      ["y", e.pageY],
      ["href", "#point-indicator"],
      ["fill", color],
    ])
  );
});
