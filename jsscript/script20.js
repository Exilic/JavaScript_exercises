function CreateDrawingBoard() {
  let createSVG = ElementCreation("svg");
  document.getElementsByTagName("body")[0].appendChild(
    ElementAttributeSet(createSVG, [
      ["width", window.innerWidth],
      ["height", window.innerHeight],
      ["id", "DrawingBoard"],
    ])
  );
}

function ElementCreation(kind) {
  let workElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    kind
  );
  return workElement;
}

function ElementAttributeSet(createdELement, attributesList) {
  for (let index = 0; index < attributesList.length; index++) {
    createdELement.setAttribute(
      attributesList[index][0],
      attributesList[index][1]
    );
  }
  return createdELement;
}

CreateDrawingBoard();
