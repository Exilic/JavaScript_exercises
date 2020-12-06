function AttributesSetting(target, attributesList) {
  for (let index = 0; index < attributesList.length; index++) {
    target.setAttribute(attributesList[index][0], attributesList[index][1]);
  }
}

function MakeSVGEntity(kind) {
  return document.createElementNS("http://www.w3.org/2000/svg", kind);
}

function MakeFullSVGEntity(kind, attributesList) {
  let svgEntity = MakeSVGEntity(kind);
  AttributesSetting(svgEntity, attributesList);
  return svgEntity;
}

document.getElementsByTagName("body")[0].appendChild(
  MakeFullSVGEntity("svg", [
    ["width", window.innerWidth],
    ["height", window.innerHeight],
    ["id", "drawing-ground"],
  ])
);

function DrawState(choice) {
  let states = [
    [[1], [40, 70], [230, 130]],
    [[2], [440, 470], [530, 630]],
  ];
  for (let index = 1; index <= states.length; index++) {
    document.getElementById("drawing-ground").appendChild(
      MakeFullSVGEntity("circle", [
        ["cy", states[choice][index][0]],
        ["cx", states[choice][index][1]],
        ["r", "15"],
      ])
    );
  }
  return true;
}
