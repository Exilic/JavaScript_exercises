window.addEventListener("mouseup", function (e) {
  let range = document.getSelection().getRangeAt(0);
  range.surroundContents(document.createElement("strong"));
});
