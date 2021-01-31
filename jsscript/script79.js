document.addEventListener("click", (e) => {
  let snippet = document.createTextNode("Grumpy");
  let container = document.createElement("div");
  let text = document.createElement("p");
  container.appendChild(text);
  text.appendChild(snippet);
  e.target.appendChild(container);
});
