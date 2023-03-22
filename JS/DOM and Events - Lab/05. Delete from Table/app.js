function deleteByEmail() {
  const inputTag = document.querySelector("label input");

  const resultMessage = document.getElementById("result");

  let tableElements = Array.from(
    document.querySelectorAll("td:nth-child(even)")
  );

  let emailValue = inputTag.value;

  let foundEmail = tableElements.find((e) => e.textContent === emailValue);

  if (foundEmail) {
    foundEmail.parentElement.remove();
    resultMessage.textContent = "Deleted";
  } else {
    resultMessage.textContent = "Not found.";
  }
}
