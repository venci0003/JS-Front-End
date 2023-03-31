function getInfo() {
  const stopIdInput = document.getElementById("stopId");

  const finalResultElement = document.getElementById("result");

  const stopNameId = document.getElementById("stopName");

  const busesListElement = document.getElementById("buses");

  fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopIdInput.value}`)
    .then((result) => result.json())
    .then((data) => {
      stopNameId.textContent = `${data.name}`;

      let dictionary = Object.entries(data.buses);

      for (const [key, value] of dictionary) {

        const newLiElement = document.createElement("li");
        
        newLiElement.textContent = `Bus ${key} arrives in ${value} minutes`;

        busesListElement.appendChild(newLiElement);

        finalResultElement.appendChild(busesListElement);
      }
    })
    .catch(() => {
      stopNameId.textContent = "Error";
    });
}
