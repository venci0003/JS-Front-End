function oddAndEvenSum(numberValue) {
  numberValue = String(numberValue);

  let evenSum = 0;

  let oddSum = 0;

  for (let i = 0; i < numberValue.length; i++) {
    if (numberValue[i] % 2 === 0) {
      evenSum += Number(numberValue[i]);
    } else {
      oddSum += Number(numberValue[i]);
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
