window.addEventListener("keydown", (e) => {
  console.log(e.key);
  let picture = document.getElementsByTagName("img")[0];
  let orderValue = parseInt(picture.style.order);
  switch (e.key) {
    case "ArrowDown":
      if (orderValue < 6) {
        picture.style.order = orderValue + 2;
      }
      break;
    case "ArrowUp":
      if (orderValue > 2) {
        picture.style.order = orderValue - 2;
      }
      break;
  }
});
