let create_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
create_svg.setAttribute("width", window.innerWidth);
create_svg.setAttribute("height", window.innerHeight);
document.getElementsByTagName("body")[0].appendChild(create_svg);

function createCircle(y, x) {
  let create_circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  create_circle.setAttribute("cy", y);
  create_circle.setAttribute("cx", x);
  create_circle.setAttribute("r", "20");
  create_circle.setAttribute("fill", "black");
  document.getElementsByTagName("svg")[0].appendChild(create_circle);
}

createCircle(100, 100);
let target_circle = document.getElementsByTagName("svg")[0].firstChild;

window.addEventListener("mousemove", function (e) {
  target_circle.setAttribute("cy", e.clientY);
  target_circle.setAttribute("cx", e.clientX);
});

window.addEventListener("click", function (e) {
  createCircle(e.clientY, e.clientX);
});
