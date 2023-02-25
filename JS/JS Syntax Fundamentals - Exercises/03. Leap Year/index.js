function leapYear(input) {
  if (input % 4 === 0 && input % 100 != 0) {
    console.log("yes");
  } else if (input % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
