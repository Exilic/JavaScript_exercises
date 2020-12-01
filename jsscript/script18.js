var userInput = document.getElementsByTagName("input")[0];

userInput.addEventListener("input", function (e) {
  if (RegExp("[A-Z]").test(userInput.value)) {
    userInput.value = userInput.value.toLowerCase();
  }
});
