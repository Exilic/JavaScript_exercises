window.addEventListener("keypress", function (e) {
  if (e.key == "r") {
    let text = document.getElementsByTagName("p")[0];
    let newText = text.textContent.slice(0, text.textContent.length - 5);
    text.innerHTML = newText;
  }
});
