const insertText = (textSnippet) => (document.getElementsByTagName("h1")[0].innerHTML = textSnippet);
const textToInsert = (grabbedEvent) =>
  `${grabbedEvent.currentTarget.innerWidth} * ${grabbedEvent.currentTarget.innerHeight}`;

window.addEventListener("load", (e) => {
  insertText(textToInsert(e));
});

window.addEventListener("resize", (e) => {
  insertText(textToInsert(e));
});
