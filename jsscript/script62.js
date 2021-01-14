window.addEventListener("resize", (e) => {
  if (e.target.innerWidth < 650) {
    document.getElementsByTagName("h1")[0].classList = "smaller";
  } else {
    document.getElementsByTagName("h1")[0].classList = "";
  }
});
