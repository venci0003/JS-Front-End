function meetingApointments(array) {
  let dictionary = {};

  for (const token of array) {
    let [name, adress] = token.split(":");

    dictionary[name] = adress;
  }

  const entries = Object.entries(dictionary);

  entries.sort((a,b) => a[0].localeCompare(b[0]));

  for (const [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
