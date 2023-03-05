function sortNames(namesArray) {
  namesArray.sort((a, b) => a.localeCompare(b));

  let counter = 0;

  for (let i = 0; i < namesArray.length; i++) {
    console.log(`${++counter}.${namesArray[i]}`);
  }
}
