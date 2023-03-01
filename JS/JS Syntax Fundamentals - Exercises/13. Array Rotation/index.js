function arrayRotation(arrayInput, loops) {
  for (let i = 0; i < loops; i++) {
    let firstElement = arrayInput.shift();
    arrayInput.push(firstElement);
  }

  console.log(arrayInput.join(" "));
}
