document.getElementById("colorSlider").addEventListener("input", (e) => {
  document.getElementsByClassName("colorized")[0].classList.remove("colorized");
  document.body.children[e.target.value].classList.add("colorized");
});
