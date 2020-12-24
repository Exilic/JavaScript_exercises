function GetIsbn() {
  fetch("http://libris.kb.se/xsearch?query=W.V.+Quine&format=json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data.xsearch.list[0].isbn);
      return data.xsearch.list[0].isbn;
    })
    .catch(function (err) {
      console.log("Error");
    });
}

function GetPost(isbn) {
  let http = `http://libris.kb.se/xsearch?query=numm:${isbn}&format=json`;
  fetch(http)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data.xsearch);
    })
    .catch(function (err) {
      console.log("Error");
    });
}

GetPost(GetIsbn());
