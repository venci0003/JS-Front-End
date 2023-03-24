function subtract() {
  const firstNumberElement = document.getElementById("firstNumber").value;

  const secondNumberElement = document.getElementById("secondNumber").value;

  const resultsElement = document.getElementById("result");

  let firstNumber = Number(firstNumberElement);

  let secondNumber = Number(secondNumberElement);

  let result = firstNumber - secondNumber;

  resultsElement.textContent = result;
}
