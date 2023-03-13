function phoneBook(array) {
    let dictionary = {};
    for (const token of array) {
      let [name, phone] = token.split(" ");
      dictionary[name] = phone;
    }
  
    const entries = Object.entries(dictionary);
    for (const [key, value] of entries) {
      console.log(`${key} -> ${value}`);
    }
  }