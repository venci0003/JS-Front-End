function employees(array) {
  for (const name of array) {
    let currentName = name;

    console.log(
      `Name: ${currentName} -- Personal Number: ${currentName.length}`
    );
  }
}
