const colorHexPart = () => Math.floor(Math.random() * 255);

window.addEventListener("click", (e) => {
  let colorHexValue = `rgb(${colorHexPart()},${colorHexPart()},${colorHexPart()})`;
  document.body.style.backgroundColor = colorHexValue;
});
