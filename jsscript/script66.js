const subjectName = {
  firstFunction(name) {
    console.log(`Hi ${name}!`);
  },
  secondFunction(number) {
    console.log(`13 * ${number} is ${13 * number}`);
  },
};

subjectName.firstFunction("Frans");
subjectName.secondFunction(17);
