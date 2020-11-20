for (let xIndex = 1; xIndex < 9; xIndex++) {
  for (let yIndex = 1; yIndex < 9; yIndex++) {
    let newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    newSVG.setAttribute("width", "70");
    newSVG.setAttribute("height", "70");
    newSVG.setAttribute("id", "x" + xIndex + "y" + yIndex);
    document.querySelector("body").appendChild(newSVG);
    let newRect = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    newRect.setAttribute("width", "70");
    newRect.setAttribute("height", "70");
    newRect.setAttribute("class", "rect");
    newSVG.appendChild(newRect);
  }
}
