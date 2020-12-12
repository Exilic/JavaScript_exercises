const first = new PhraseBuilder("blue", "hide");

function PhraseBuilder(adjective, verb) {
  this.phrase1 = `We are ${adjective} to ${verb} a dog in the park.`;
  this.phrase2 = `They could not ${verb} in the ${adjective} hall.`;
  this.phrase3 = `I ${verb} no ${adjective} ideas anymore.`;
}

function MakeElementWithContent(kind, content) {
  let target = document.createElement(kind);
  let text = document.createTextNode(content);
  target.appendChild(text);
  document.getElementsByTagName("main")[0].appendChild(target);
}

MakeElementWithContent("p", first.phrase1);
MakeElementWithContent("p", first.phrase2);
MakeElementWithContent("p", first.phrase3);
