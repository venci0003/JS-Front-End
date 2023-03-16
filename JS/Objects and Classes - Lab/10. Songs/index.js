function songs(array) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let countOfSongs = array[0];
  let songFilter = array[array.length - 1];
  let songs = [];

  for (let index = 1; index <= countOfSongs; index++) {
    let tokens = array[index].split("_");
    let currentSong = new Song(tokens[0],tokens[1],tokens[2])

    songs.push(currentSong);
  }

  if (songFilter === "all") {
    for (const song of songs) {
      console.log(song.name);
    }
  } else
    songs
      .filter((s) => s.typeList === songFilter)
      .forEach((s) => console.log(s.name));
}
