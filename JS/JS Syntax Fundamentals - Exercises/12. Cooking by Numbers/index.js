function cookingByNumbers(
  inputNumber,
  firstOperation,
  secondOperation,
  thirdOperation,
  fourthOperation,
  fifthOperation
) {
  let inputAsNumber = Number(inputNumber);

  let token = [
    firstOperation,
    secondOperation,
    thirdOperation,
    fourthOperation,
    fifthOperation,
  ];

  for (let i = 0; i < token.length; i++) {
    if (token[i] === "chop") {
      inputNumber /= 2;
    } else if (token[i] === "dice") {
      let result = Math.sqrt(inputNumber);
      inputNumber = result;
    } else if (token[i] === "spice") {
      inputNumber++;
    } else if (token[i] === "bake") {
      inputNumber *= 3;
    } else if (token[i] === "fillet") {
      inputNumber = inputNumber - (inputNumber * 20) / 100;
    }

    console.log(inputNumber);
  }
}
