//Brad Traversy – Udemy, Learn and build projects with pure JavaScript (No frameworks or libraries)

function secondTry() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      data.forEach((element) => {
        let paragraph = document.createElement("p");
        let content = document.createTextNode(element.title);
        paragraph.appendChild(content);
        document.getElementsByTagName("body")[0].appendChild(paragraph);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

secondTry();
