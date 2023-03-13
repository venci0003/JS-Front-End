function meetingApointments(array) {
  let dictionary = {};

  for (const token of array) {
    let [day, person] = token.split(" ");

    if (!dictionary.hasOwnProperty(day)) {
      console.log(`Scheduled for ${day}`);
      dictionary[day] = person;
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }

  const entries = Object.entries(dictionary);

  for (const [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
