var height_inner = window.innerHeight;
var width_inner = window.innerWidth;

let new_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
new_svg.setAttribute("width", "800");
new_svg.setAttribute("height", "500");
document.getElementsByTagName("body")[0].appendChild(new_svg);
let new_circle = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle"
);
new_circle.setAttribute("cy", "200");
new_circle.setAttribute("cx", "350");
new_circle.setAttribute("r", height_inner / 8);
new_circle.setAttribute("fill", "blue");
document.getElementsByTagName("svg")[0].appendChild(new_circle);

window.addEventListener("resize", function (e) {
  let target_circle = document.getElementsByTagName("circle")[0];
  if (height_inner == e.currentTarget.innerHeight) {
    if (width_inner > e.currentTarget.innerWidth) {
      target_circle.setAttribute("fill", "red");
      width_inner = e.currentTarget.innerWidth;
    } else {
      target_circle.setAttribute("fill", "blue");
      width_inner = e.currentTarget.innerWidth;
    }
  } else {
    target_circle.setAttribute("r", e.currentTarget.innerHeight / 8);
    height_inner = e.currentTarget.innerHeight;
  }
});
