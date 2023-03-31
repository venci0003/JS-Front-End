function loadRepos() {
   const url = "https://api.github.com/users/testnakov/repos";

   const divElement = document.getElementById("res");

   fetch(url)
    .then((res) => res.text())
    .then((data) => (divElement.textContent = data))
    .catch((error) => console.error(error));
}