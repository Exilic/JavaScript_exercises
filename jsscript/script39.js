!(async function () {
  let data = await fetch("http://api.scb.se/OV0104/v1/doris/sv/ssd/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (err) {
      return err;
    });

  data.forEach((element) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = element.text;
    document.getElementsByTagName("ol")[0].appendChild(listItem);
  });
})();
