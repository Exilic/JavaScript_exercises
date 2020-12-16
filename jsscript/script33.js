//Brad Traversy – Udemy, Learn and build projects with pure JavaScript (No frameworks or libraries)

function firstTry() {
  this.http = new XMLHttpRequest();
}

firstTry.prototype.get = function (url) {
  this.http.open("GET", url, true);

  this.http.onload = () => {
    if (this.http.status === 200) {
      console.log(this.http.responseText);
    }
  };

  this.http.send();
};

const source = new firstTry();

source.get("https://jsonplaceholder.typicode.com/posts");
