window.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "a":
      emptyPageFromText();
      ["First", "line", "of", "text"].forEach(addTextToPage);
      break;
    case "b":
      emptyPageFromText();
      ["Second", "in", "order"].forEach(addTextToPage);
      break;
    case "c":
      emptyPageFromText();
      ["Third", "and", "last"].forEach(addTextToPage);
      break;
    default:
      break;
  }
});

function addTextToPage(text) {
  let content = document.createTextNode(text + " ");
  document.getElementsByTagName("p")[0].appendChild(content);
}

function emptyPageFromText() {
  document.getElementsByTagName("p")[0].innerText = "";
}
