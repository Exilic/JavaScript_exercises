let sentences = document.getElementsByTagName("p")[0].innerHTML.split(".");
sentences.forEach((line) => {
  console.log(line.trim().charAt(0));
});
