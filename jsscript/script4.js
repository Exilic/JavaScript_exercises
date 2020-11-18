function AddSVG2() {
  let dad = document.querySelector("body");
  let firstElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  firstElement.setAttribute("viewbox", "0 0 200 200");
  document.querySelector("body").appendChild(firstElement);

  for (let index = 1; index < 5; index++) {
    let firstElementGeometry1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    firstElementGeometry1.setAttribute("cx", 30 * index);
    firstElementGeometry1.setAttribute("cy", 30 * index);
    firstElementGeometry1.setAttribute("r", 20);
    dad.lastChild.appendChild(firstElementGeometry1);
  }
}

AddSVG2();
