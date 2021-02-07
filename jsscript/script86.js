window.addEventListener("resize", (e) => {
  let snippet = document.getElementsByTagName("p")[0].innerHTML.split(" ");
  snippet.forEach((word) => {
    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", word);
    document.body.appendChild(button);
  });
});
