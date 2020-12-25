document.addEventListener("submit", function (e) {
  if (e.submitter.id == "acceptCookie") {
    document.cookie = "userinfo=This was really in the cookie";
  } else if (e.submitter.id == "retrieveCookie") {
    let message = document.createTextNode(document.cookie);
    document.getElementsByTagName("p")[0].appendChild(message);
  } else if (e.submitter.id == "deleteCookie") {
    document.cookie = "userinfo= ; expires = Mon, 21 Dec 2020 22:00:00 UTC;";
    console.log(document.cookie);
  }
});
