window.addEventListener("scroll", (e) => {
  let targetElement = document.getElementsByTagName("h1")[0];
  if (window.pageYOffset >= 100) {
    targetElement.classList.add("sticky");
  } else {
    targetElement.classList.remove("sticky");
  }
});
