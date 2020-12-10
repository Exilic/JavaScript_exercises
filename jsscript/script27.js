console.log(document.getElementsByTagName("input")[0]);
document
  .getElementsByTagName("input")[0]
  .addEventListener("input", function (e) {
    document.getElementsByTagName("p")[0].textContent += e.data;
    document.getElementsByTagName("input")[0].value = "";
  });
