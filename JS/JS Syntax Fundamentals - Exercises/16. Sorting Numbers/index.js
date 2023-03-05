function sortNumbers(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  let outputArray = [];
  let bonusIndex = 0;
  for (let index = 0; index < array.length; index++) {
    if (bonusIndex % 2 == 0) {
      let value = array.shift();
      outputArray.push(value);
    } else {
      let value = array.pop();
      outputArray.push(value);
    }
    bonusIndex++;
    index--;
  }
  return outputArray;
}
