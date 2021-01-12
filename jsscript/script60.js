let rotationDegree = 0;

document.addEventListener("mouseover", (e) => {
  rotationDegree++;
  let styleText = `rotate(-${rotationDegree}deg)`;

  document.getElementsByTagName("h1")[0].style.transform = styleText;
});
