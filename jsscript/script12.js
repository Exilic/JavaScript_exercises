var photoDisplayed = false;

function showPhoto(choice) {
  if (photoDisplayed) {
    let changePhoto = document.getElementsByTagName("main")[0]
      .firstElementChild;
    changePhoto.setAttribute("src", "/img/" + choice + ".png");
  } else {
    let create_photo = document.createElement("img");
    console.log(create_photo);
    create_photo.setAttribute("src", "/img/" + choice + ".png");
    create_photo.setAttribute("alt", choice);
    document.getElementsByTagName("main")[0].appendChild(create_photo);
    photoDisplayed = true;
  }
  return false;
}
