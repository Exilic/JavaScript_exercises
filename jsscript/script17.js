var inputRange = document.getElementsByTagName("input")[0];

inputRange.addEventListener("input", function (e) {
  inputRange.previousElementSibling.innerHTML =
    "256 multiplied by " + inputRange.value + " is " + inputRange.value * 256;
});
