function wordOccurences(textInput, wordOccurence) {
  let count = 0;

  let textArray = textInput.split(" ");

  for (const word of textArray) {
    if (word === wordOccurence) {
      count++;
    }
  }

  console.log(count);
}
