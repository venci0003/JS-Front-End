function wordsTracker(array) {
  let dictionaryObject = {};

  let wordsSplit = array[0].split(" ");

  wordsSplit.forEach((word) => {
    dictionaryObject[word] = 0;
  });

  for (let index = 1; index < array.length; index++) {
    if (dictionaryObject.hasOwnProperty(array[index])) {
      dictionaryObject[array[index]]++;
    }
  }

  const result = Object.entries(dictionaryObject).sort((a,b) => b[1] - a[1]);

  for (const [key,value] of result) {
        console.log(`${key} - ${value}`);
  }
}
