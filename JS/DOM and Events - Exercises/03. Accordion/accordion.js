function toggle() {
  let buttonElement = document.getElementsByClassName("button")[0];

  const divExtraElement = document.getElementById("extra");

  if (buttonElement.textContent === "More") {
    buttonElement.textContent = "Less";
    divExtraElement.style.display = "block";
  } else {
    buttonElement.textContent = "More";
    divExtraElement.style.display = "none";
  }
}
