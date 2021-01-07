window.addEventListener("click", (e) => {
  console.log(e);
  const [htmlPath, documentPath, windowPath, ...additional] = e.path;
  console.log(htmlPath);
  console.log(documentPath);
  console.log(windowPath);
  console.log(e.path);
  const elements = document;
  const f = document.createTextNode("Football");
  console.log(elements.body.appendChild(f));
});
