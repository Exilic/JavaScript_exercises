function Libris() {
  fetch("http://libris.kb.se/xsearch?query=Memory+Mary+Carruthers&format=json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const resultPlace = document.createElement("ol");
      document.body.appendChild(resultPlace);
      data.xsearch.list.forEach((element) => {
        let listPost = document.createElement("li");
        let listPostContent = document.createTextNode(element.title);
        listPost.appendChild(listPostContent);
        resultPlace.appendChild(listPost);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

Libris();
