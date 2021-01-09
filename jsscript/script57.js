window.addEventListener("click", (e) => {
  let shakyTarget = document.getElementsByTagName("main")[0].classList;
  shakyTarget.add("shake");
  setTimeout(() => {
    shakyTarget.remove("shake");
  }, 500);
});
