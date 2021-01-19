let unsortedText = document.getElementsByTagName("h1")[0].innerText.split(" ");

let sortedText = unsortedText.map((word) => word.toLowerCase()).sort();

document.getElementsByTagName("h1")[0].innerText = sortedText.join(" ");
