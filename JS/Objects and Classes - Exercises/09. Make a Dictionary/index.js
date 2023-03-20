function termDictionary(array) {
  let objectDictionary = {};

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    let jsonParsed = JSON.parse(element);

    let keys = Object.keys(jsonParsed);

    let values = Object.values(jsonParsed);

    objectDictionary[keys[0]] = values[0];
  }

  let sortedResult = Object.entries(objectDictionary).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [key, value] of sortedResult) {
    console.log(`Term: ${key} => Definition: ${value}`);
  }
}
