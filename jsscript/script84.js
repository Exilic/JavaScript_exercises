window.addEventListener("click", (e) => {
  let increasedSize = Number(document.body.style.fontSize.split("p")[0]) + 1;
  document.body.style.fontSize = `${increasedSize}px`;
});
