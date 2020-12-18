function librisPost() {
  fetch("http://libris.kb.se/xsearch?query=W.V.+Quine&format=json&n=30")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      //data = JSON.parse(data);
      console.log(data);
      data.xsearch.list.forEach((element) => {
        let paragraph = document.createElement("p");
        let target = document.createTextNode(element.title);
        paragraph.appendChild(target);
        document.getElementsByTagName("body")[0].appendChild(paragraph);
      });
    });
}

librisPost();
