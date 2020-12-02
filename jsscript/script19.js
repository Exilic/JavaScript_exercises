let createSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
createSVG.setAttribute("width", window.innerWidth);
createSVG.setAttribute("height", window.innerHeight);
document.getElementsByTagName("body")[0].appendChild(createSVG);

let inputsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
inputsGroup.setAttribute("id", "Inputs");
createSVG.appendChild(inputsGroup);

let controlsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
controlsGroup.setAttribute("id", "Controls");
createSVG.appendChild(controlsGroup);

let controlsToolbox = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "g"
);
controlsToolbox.setAttribute("id", "ControlsToolbox");
controlsGroup.appendChild(controlsToolbox);

let createToolboxBg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "rect"
);
createToolboxBg.setAttribute("x", "50");
createToolboxBg.setAttribute("y", "50");
createToolboxBg.setAttribute("width", "60");
createToolboxBg.setAttribute("height", "184");
createToolboxBg.setAttribute("id", "ControlsToolbox-bg");
controlsToolbox.appendChild(createToolboxBg);

function drawControlsButtons() {
  let positionY = 60;
  let controlsChoices = ["line", "rect", "circle"];
  let createButton;
  for (let order = 1; order < controlsChoices.length + 1; order++) {
    createButton = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    createButton.setAttribute("class", "unselected");
    createButton.setAttribute("x", "52");
    createButton.setAttribute("y", positionY);
    createButton.setAttribute("width", "56");
    createButton.setAttribute("height", "56");
    controlsToolbox.appendChild(createButton);
    positionY += 58;
  }
}

drawControlsButtons();
