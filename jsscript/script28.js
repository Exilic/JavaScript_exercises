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
  ])
);

document.getElementsByTagName("svg")[0].appendChild(MakeSVGElement("defs"));

document.getElementsByTagName("defs")[0].appendChild(
  MakeFullSVGElement("filter", [
    ["id", "filter1"],
    ["x", "-100%"],
    ["y", "-100%"],
    ["height", "300%"],
    ["width", "300%"],
    ["edgeMode", "wrap"],
  ])
);

document.getElementsByTagName("filter")[0].appendChild(
  MakeFullSVGElement("feGaussianBlur", [
    ["in", "SourceGraphic"],
    ["stdDeviation", "60"],
  ])
);

document
  .getElementsByTagName("svg")[0]
  .appendChild(
    MakeFullSVGElement("circle", [
      ["cy", "400"],
      ["cx", "400"],
      ["r", "100"],
      ["fill", "yellow"],
      ["filter", "url(#filter1)"],
      [("id", "tracker")],
    ])
  );

window.addEventListener("mousemove", function (e) {
  let target = document.getElementsByTagName("circle")[0];
  console.log(e.pageX);
  console.log(e.pageY);
  console.log(target);
  AttributesSetting(target, [
    ["cy", e.pageY],
    ["cx", e.pageX],
  ]);
});

window.addEventListener("resize", function (e) {
  let target = document.getElementsByTagName("svg")[0];
  AttributesSetting(target, [
    ["width", e.innerWidth],
    ["height", e.innerHeight],
  ]);
});
