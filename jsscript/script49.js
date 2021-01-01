const person = (firstName = "John", lastName = "Doe") => {
  return `Hello, ${firstName} ${lastName}!`;
};

console.log(person());
console.log(person("Anita", "Johnson"));
console.log(person("Frank"));
console.log(person(undefined, "Hope"));
