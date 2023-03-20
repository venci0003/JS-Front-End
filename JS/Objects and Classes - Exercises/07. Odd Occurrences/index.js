function oddOccurrences(sentence) {
  let splittedSentence = sentence.split(" ").map((x) => x.toLowerCase());

  let dictionaryObject = {};

  splittedSentence.forEach((element) => {
    dictionaryObject[element] = 0;
  });

  for (let index = 0; index < splittedSentence.length; index++) {
    const element = splittedSentence[index];

    if (dictionaryObject.hasOwnProperty(element)) {
      dictionaryObject[element]++;
    }
  }

  let result = Object.entries(dictionaryObject);

  let output = [];

  for (const [key,value] of result) {
    if (value % 2 !== 0) {
        output.push(key);
    }
  }

  console.log(output.join(" "))
}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
