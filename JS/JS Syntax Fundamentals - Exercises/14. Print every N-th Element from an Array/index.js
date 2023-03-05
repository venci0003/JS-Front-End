function nthElement(array, step) {
  let arrayResult = [];

  for (let i = 0; i < array.length; i += step) {
    if (i < array.length) {
      arrayResult.push(array[i]);
    }
  }
  return arrayResult;
}
