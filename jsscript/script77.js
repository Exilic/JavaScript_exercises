let mainContent;

window.addEventListener("load", (e) => {
  mainContent = document.getElementsByTagName("main")[0].innerHTML;
  document.getElementsByTagName("main")[0].innerHTML = "";
});

window.addEventListener("click", (e) => {
  document.getElementsByTagName("main")[0].innerHTML = mainContent;
});
