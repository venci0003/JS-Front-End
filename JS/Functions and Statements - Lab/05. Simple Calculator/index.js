function simpleCalculator(numberOne, numberTwo, operation) {
  let dictionary = {
    multiply: numberOne * numberTwo,
    divide: numberOne / numberTwo,
    add: numberOne + numberTwo,
    subtract: numberOne - numberTwo,
  };
  let result = dictionary[operation];
  console.log(result);
}
