function loadCommits() {
  const userInputElement = document.getElementById("username");

  const repoInputElement = document.getElementById("repo");

  const ulListElement = document.getElementById("commits");

  fetch(
    `https://api.github.com/repos/${userInputElement.value}/${repoInputElement.value}/commits`
  )
    .then((result) => result.json())
    .then((data) => {
      data.forEach((element) => {
        const newLiTagElement = document.createElement("li");
        newLiTagElement.textContent = `${element.commit.author.name}: ${element.commit.message}`;
        ulListElement.appendChild(newLiTagElement);
      });
    })
    .catch((error) => {
      const newLiTagElement = document.createElement("li");
      newLiTagElement.textContent = `Error: ${error} (Not Found)`;
      ulListElement.appendChild(newLiTagElement);
    });
}
