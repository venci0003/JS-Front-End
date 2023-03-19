function employees(array) {
  let object = {};

  for (let index = 0; index < array.length; index++) {
    object[array[index]] = array[index].length;
  }

  let result = Object.entries(object);

  for (const [key, value] of result) {
    console.log(`Name: ${key} -- Personal Number: ${value}`);
  }
}
