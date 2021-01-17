const firstLevel = (first, second, third) =>
  (document.getElementsByTagName("p")[0].textContent += `A ${first} and ${second} ${third}. `);

const secondLevel = (firstInput, secondInput) =>
  ["blue", "red", "green", "yellow", "white"].forEach((item) => firstLevel(item, firstInput, secondInput));

const thirdLevel = (secondInput) =>
  ["hard", "soft", "wet", "dry", "durable"].forEach((item) => secondLevel(item, secondInput));

["toy", "car", "breakfast", "morning", "idea"].forEach(thirdLevel);
