function findWord(wordToFind, text) {
  text = text.toLowerCase();

  let textTokens = text.split(" ");

  if (textTokens.includes(wordToFind)) {
    console.log(wordToFind);
  } else {
    console.log(`${wordToFind} not found!`);
  }
}

findWord("javascript", "JavaScript is the best programming language");
