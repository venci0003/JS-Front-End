function movies(array) {
  let movies = [];

  for (const line of array) {
    let tokens = line.split(" ");

    if (line.includes("addMovie")) {
      let movieName = tokens.slice(1).join(" ");
      addMovie(movieName);
    } else if (line.includes("directedBy")) {
      let commandIndex = tokens.indexOf("directedBy");
      let movieName = tokens.slice(0, commandIndex).join(" ");
      let directorName = tokens.slice(commandIndex + 1 ).join(" ");

      addDirector(movieName, directorName);
    } else if (line.includes("onDate")) {
      let commandIndex = tokens.indexOf("onDate");
      let movieName = tokens.slice(0, commandIndex).join(" ");
      let dateTime = tokens.slice(commandIndex + 1).join(" ");

      addDate(movieName, dateTime);
    }
  }

  function addMovie(name) {
    movies.push({ name });
  }

  function addDirector(movieName, director) {
    let movieToFind = movies.find((m) => m.name === movieName);

    if (movieToFind) {
      movieToFind.director = director;
    }
  }

  function addDate(movieName, date) {
    let movieToFind = movies.find((m) => m.name === movieName);

    if (movieToFind) {
      movieToFind.date = date;
    }
  }

  for (const movie of movies) {
    if (
      movie.hasOwnProperty("name") &&
      movie.hasOwnProperty("director") &&
      movie.hasOwnProperty("date")
    ) {
      console.log(JSON.stringify(movie));
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
