function sumArray(startIndex, endIndex) {
  arrayValue = [];

  let sum = 0;

  for (let i = startIndex; i <= endIndex; i++) {
    arrayValue.push(i);
    sum += i;
  }

  console.log(arrayValue.join(" "));
  console.log(`Sum: ${sum}`);
}

