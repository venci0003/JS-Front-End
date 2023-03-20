function picollo(array) {
  let uniqueNumbers = new Set();

  for (let index = 0; index < array.length; index++) {
    const element = array[index].split(", ");

    if (element[0] === "IN") {
      uniqueNumbers.add(element[1]);
    } else if (element[0] === "OUT") {
      if (uniqueNumbers.has(element[1])) {
        uniqueNumbers.delete(element[1]);
      }
    }
  }

  let sorted = [...uniqueNumbers].sort((a, b) => a.localeCompare(b));

  if (uniqueNumbers.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    for (const line of sorted) {
      console.log(line);
    }
  }
}
