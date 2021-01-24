let targetedLine;

document.getElementsByTagName("main")[0].addEventListener("mousedown", (e) => {
  targetedLine = e.target;
});

document.getElementsByTagName("main")[0].addEventListener("mouseup", (e) => {
  console.log(e.target);
  console.log(targetedLine);
  console.log(e.target.parentNode);
  e.target.parentNode.insertBefore(e.target, targetedLine);
});
