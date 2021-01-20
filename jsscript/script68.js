let targetHeight;

window.addEventListener("load", (e) => {
  console.log(e.currentTarget.innerHeight);
  targetHeight = e.currentTarget.innerHeight;
});

window.addEventListener("resize", (e) => {
  let textContent = document.getElementsByTagName("p")[0];
  textContent.style.transform = `scaleY(${e.currentTarget.innerHeight / targetHeight}`;
});
