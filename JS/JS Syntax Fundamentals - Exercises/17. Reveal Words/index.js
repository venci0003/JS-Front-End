function revealWords(array, text) {
  let wordsTokens = array.split(", ");
  let textTokens = text.split(" ");

  for (let i = 0; i < wordsTokens.length; i++) {
    let currentWord = wordsTokens[i];

    for (let j = 0; j < textTokens.length; j++) {
      if (
        textTokens[j].includes("*") &&
        textTokens[j].length == currentWord.length
      ) {
        textTokens[j] = currentWord;
        break;
      }
    }
  }
  console.log(textTokens.join(" "));
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
