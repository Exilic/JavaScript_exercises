window.addEventListener("keydown", (e) => {
  let paragraphSelect = document.getElementsByTagName("p");
  if (e.key == "ArrowRight") {
    let temporary = paragraphSelect[0].classList[0];
    paragraphSelect[0].classList = paragraphSelect[1].classList[0];
    paragraphSelect[1].classList = paragraphSelect[2].classList[0];
    paragraphSelect[2].classList = temporary;
  }
});
