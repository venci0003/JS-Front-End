function charactersInRange(firstChar, secondChar) {
  let arrayResult = [];

  let start = firstChar.charCodeAt();

  let end = secondChar.charCodeAt();

  if (start > end) {
    [start, end] = [end, start];
  }

  for (let i = start + 1; i < end; i++) {
    arrayResult.push(String.fromCharCode(i));
  }

  console.log(arrayResult.join(" "));
}
