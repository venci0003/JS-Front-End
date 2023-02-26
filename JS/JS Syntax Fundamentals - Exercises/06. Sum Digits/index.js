function sameDigits(number) {
  let numberSum = 0;
  let areSame = true;
  let oldDigit = 0;
  let iterations = 0;
  
  while (number > 0) {
    let digit = number % 10;
    numberSum += digit;
    number /= 10;
    number = parseInt(number);
    if (iterations !== 0 && oldDigit !== digit) {
      areSame = false;
    }
    oldDigit = digit;
    iterations++;
  }
  console.log(areSame);
  console.log(numberSum);
}