window.addEventListener("load", (e) => {
  if (e.currentTarget.innerWidth < 1100) {
    let warning = document.createElement("p");
    warning.setAttribute("id", "warningSize");
    warning.innerText = "Resize browser window for increased width";
    document.body.appendChild(warning);
  }
});

window.addEventListener("resize", (e) => {
  if (e.currentTarget.innerWidth >= 1100 && !!document.getElementById("warningSize")) {
    document.getElementById("warningSize").remove();
  }
});
