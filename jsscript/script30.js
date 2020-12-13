function SvgCreator(kind, attributes) {
  this.kind = kind;
  this.attributes = attributes;
  //this.createKind =
}

SvgCreator.prototype.createKind = function () {
  return document.createElementNS("http://www.w3.org/2000/svg", this.kind);
};

let redCircle = new SvgCreator("svg", "width");
document.getElementsByTagName("body")[0].appendChild(redCircle.createKind());
console.log(redCircle);
