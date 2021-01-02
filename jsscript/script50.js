window.addEventListener("click", (e) => {
  let main = document.getElementsByTagName("main")[0];
  let aside = document.getElementsByTagName("aside")[0];
  if (main.classList.contains("clicked")) {
    switchClass(main, aside, "clicked");
  } else {
    switchClass(aside, main, "clicked");
  }
});

function switchClass(fromElement, toElement, className) {
  fromElement.classList.remove(className);
  toElement.classList.add(className);
}
