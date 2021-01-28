const createOption = (part, target) => {
  let option = document.createElement("options");
  option.setAttribute("value", part);
  option.innerText = part;
  target.appendChild(option);
};
document.getElementsByTagName("input")[0].addEventListener("change", (e) => {
  let options = e.target.value.split(" ");
  let selectElement = document.createElement("select");
  options.forEach((part) => createOption(part, selectElement));
  document.body.appendChild(selectElement);
});
