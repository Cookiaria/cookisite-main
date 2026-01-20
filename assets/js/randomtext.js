let randomHeaderCounter = localStorage.getItem("randomHeaderCounter") || -1;
let headersData = [];
let headers = [];
const randomHeaderElement = document.getElementById("randomHeader");

fetch("/assets/randomstrings.json")
  .then((response) => response.json())
  .then((data) => {
    headersData = data.headers;
    randomHeader();
  });

function randomHeader() {
  if (headersData.length == 0) return;
  if (headers.length == 0) headers = headersData.slice();

  localStorage.setItem("randomHeaderCounter", ++randomHeaderCounter);

  let idx = Math.floor(Math.random() * headers.length);
  randomHeaderElement.innerHTML = headers[idx];
  headers.splice(idx, 1);

  const randomHeaderCounterElem = document.getElementById(
    "randomHeaderCounter",
  );
  if (randomHeaderCounterElem) {
    randomHeaderCounterElem.innerHTML = randomHeaderCounter + " time";
    if (randomHeaderCounter != 1) randomHeaderCounterElem.innerHTML += "s";
  }
}
