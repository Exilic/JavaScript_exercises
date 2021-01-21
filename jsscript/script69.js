document.addEventListener("submit", (e) => {
  e.preventDefault();
  const color = () => Math.floor(Math.random() * 256).toString(16);
  document.body.style.backgroundColor = `#${color()}${color()}${color()}`;
});
