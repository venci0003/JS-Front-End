function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
  const sum = (a, b) => a + b;

  const subtract = (a, b) => a - b;

  console.log(subtract(sum(firstNumber, secondNumber), thirdNumber));
}