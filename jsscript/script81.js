let text = document.createTextNode("first element");
let textElement = document.createElement("p");
textElement.appendChild(text);
document.body.prepend(textElement);
