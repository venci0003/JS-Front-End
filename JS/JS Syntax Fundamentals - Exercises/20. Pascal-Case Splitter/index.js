function pascalCaseSplitter(text) {
  let words = text.match(/[A-Z][a-z]*/g);

  let result = words.join(", ");

  console.log(result);
}
