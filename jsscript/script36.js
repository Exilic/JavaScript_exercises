document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (e) {
    e.preventDefault();
    searchLibris(e);
  });

function searchLibris(searchTerms) {
  let searchString = "http://libris.kb.se/xsearch?query=";
  if (searchTerms.author == null && searchTerms.title == null) return;
  if (searchTerms.author != null)
    searchString += `förf:(${searchTerms.author})`;
  if (searchTerms.title != null && searchTerms.author == null)
    searchString += `titel:(${searchTerms.title})`;
  if (searchTerms.title != null && searchTerms.author != null)
    searchString += `&titel:(${searchTerms.title})`;
  searchString += "&format=json";
  return searchString;
}
