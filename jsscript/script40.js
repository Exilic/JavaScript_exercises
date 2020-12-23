window.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key == "ArrowDown") changeNumber(-1);
  if (e.key == "ArrowUp") changeNumber(1);
});

function changeNumber(direction) {
  let number = document.getElementsByTagName("h1")[0];
  number.innerText = (direction + Number(number.innerText)).toString();
}
