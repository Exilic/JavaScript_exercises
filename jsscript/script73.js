document.getElementsByTagName("table")[0].addEventListener("click", (e) => {
  e.target.innerHTML = `<input type="text" value=${e.target.innerText}></input>`;
});
