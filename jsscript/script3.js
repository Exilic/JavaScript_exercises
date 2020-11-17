function AddSVG() {
  let a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  a.setAttribute("viewBox", "0 0 100 100");
  a.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  document.querySelector("body").appendChild(a);
  let b = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  b.setAttribute("x", "0");
  b.setAttribute("y", "0");
  b.setAttribute("width", "100%");
  b.setAttribute("height", "100%");
  b.setAttribute("class", "svg-rect");
  document.getElementsByTagName("svg")[0].appendChild(b);
}

AddSVG();
