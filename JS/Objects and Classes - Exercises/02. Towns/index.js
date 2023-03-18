function towns(array) {
  array
    .map((line) => line.split(" | "))
    .map(([town, latitude, longitude]) => ({
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    }))
    .forEach((town) => {
      console.log(town);
    });
}
