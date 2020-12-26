function makeHtmlElement(kind) {
  let container = document.createElement(kind);
  let content = document.createTextNode("Filler text");
  document.getElementsByTagName("main")[0].appendChild(container);
  container.appendChild(content);
}

["h1", "p", "p", "h2", "p"].forEach(makeHtmlElement);
