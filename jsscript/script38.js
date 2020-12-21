function Libris(author, title) {
  let httpString = `http://libris.kb.se/xsearch?query=förf:(${author})and tit:"${title}"&format=json`;
  fetch(httpString)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      data.xsearch.list.forEach((element) => {
        console.log(element.creator);
        console.log(element.title);
      });
    })
    .catch(function (err) {
      console.log("Something went wrong");
    });
}

Libris("Goffman", "Stigma");
