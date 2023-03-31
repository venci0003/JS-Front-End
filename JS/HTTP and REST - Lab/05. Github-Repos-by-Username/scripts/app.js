function loadRepos() {
  const inputElement = document.getElementById("username");
  const ulElement = document.getElementById("repos");
  ulElement.textContent = "";
  const baseURL = "https://api.github.com/users/";
  const username = inputElement.value;

  fetch(`${baseURL}${username}/repos`)
    .then((info) => info.json())
    .then((result) => {
      result.forEach((element) => {
        const aTag = document.createElement("a");
        aTag.textContent = `${element.full_name}`;
        aTag.setAttribute("href", `${element.html_url}`);
        const liTag = document.createElement("li");
        liTag.appendChild(aTag);
        ulElement.appendChild(liTag);
      });
    })
    .catch((error) => {
      hrefElement.textContent = `${error}`;
      const liElement = document.createElement("li");
      liElement.appendChild(hrefElement);
      ulElement.appendChild(liElement);
    });
}
