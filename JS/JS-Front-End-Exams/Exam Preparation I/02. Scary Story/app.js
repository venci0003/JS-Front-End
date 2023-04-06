window.addEventListener("load", solve);

function solve() {
  const firstNameInputElement = document.getElementById("first-name");

  let firstNameValue = "";

  const lastNameInputElement = document.getElementById("last-name");

  let lastNameValue = "";

  const ageInputElement = document.getElementById("age");

  let ageInputValue = "";

  const storyInputElement = document.getElementById("story-title");

  let storyInputValue = "";

  const genreInputElement = document.getElementById("genre");

  let genreInputValue = "";

  const textAreaInputElement = document.getElementById("story");

  let textAreaInputValue = "";

  const publishButtonElement = document.getElementById("form-btn");

  const previewListElement = document.getElementById("preview-list");

  publishButtonElement.addEventListener("click", onClick);

  function onClick() {
    if (
      firstNameInputElement.value !== "" &&
      lastNameInputElement.value !== "" &&
      ageInputElement.value !== "" &&
      textAreaInputElement.value !== "" &&
      storyInputElement.value !== ""
    ) {
      const newLiElement = document.createElement("li");

      newLiElement.className = "story-info";

      previewListElement.appendChild(newLiElement);

      const newArticleElement = document.createElement("article");

      newLiElement.appendChild(newArticleElement);

      const newHeaderFourElement = document.createElement("h4");

      newHeaderFourElement.textContent = `Name: ${firstNameInputElement.value} ${lastNameInputElement.value}`;

      newArticleElement.appendChild(newHeaderFourElement);

      const newParagraphForAge = document.createElement("p");

      newParagraphForAge.textContent = `Age: ${ageInputElement.value}`;

      newArticleElement.appendChild(newParagraphForAge);

      const newParagraphForTitle = document.createElement("p");

      newParagraphForTitle.textContent = `Title: ${storyInputElement.value}`;

      newArticleElement.appendChild(newParagraphForTitle);

      const newParagraphForGenre = document.createElement("p");

      newParagraphForGenre.textContent = `Genre: ${genreInputElement.value}`;

      newArticleElement.appendChild(newParagraphForGenre);

      const newParagraphForStory = document.createElement("p");

      newParagraphForStory.textContent = `${textAreaInputElement.value}`;

      newArticleElement.appendChild(newParagraphForStory);

      const newButtonSaveElement = document.createElement("button");

      newButtonSaveElement.className = "save-btn";

      newButtonSaveElement.textContent = "Save Story";

      newLiElement.appendChild(newButtonSaveElement);

      const newButtonEditElement = document.createElement("button");

      newButtonEditElement.className = "edit-btn";

      newButtonEditElement.textContent = "Edit Story";

      newLiElement.appendChild(newButtonEditElement);

      const newButtonDeleteElement = document.createElement("button");

      newButtonDeleteElement.className = "delete-btn";

      newButtonDeleteElement.textContent = "Delete Story";

      newLiElement.appendChild(newButtonDeleteElement);

      publishButtonElement.disabled = true;

      newButtonSaveElement.disabled = false;

      newButtonEditElement.disabled = false;

      newButtonDeleteElement.disabled = false;

      newButtonSaveElement.addEventListener("click", SaveOnClick);

      newButtonDeleteElement.addEventListener("click", DeleteOnClick);

      newButtonEditElement.addEventListener("click", EditOnClick);

      firstNameValue = firstNameInputElement.value;

      lastNameValue = lastNameInputElement.value;

      ageInputValue = ageInputElement.value;

      storyInputValue = storyInputElement.value;

      genreInputValue = genreInputElement.value;

      textAreaInputValue = textAreaInputElement.value;

      firstNameInputElement.value = "";
      lastNameInputElement.value = "";
      ageInputElement.value = "";
      textAreaInputElement.value = "";
      storyInputElement.value = "";
    }
  }

  function SaveOnClick() {
    const idMainElement = document.getElementById("main");

    idMainElement.innerHTML = " ";

    const newHeaderOneTag = document.createElement("h1");

    newHeaderOneTag.textContent = "Your scary story is saved!";

    idMainElement.appendChild(newHeaderOneTag);
  }

  function DeleteOnClick(event) {
    event.target.parentElement.remove();

    publishButtonElement.disabled = false;
  }

  function EditOnClick(event) {
    firstNameInputElement.value = firstNameValue;

    lastNameInputElement.value = lastNameValue;

    ageInputElement.value = ageInputValue;

    storyInputElement.value = storyInputValue;

    genreInputElement.value = genreInputValue;

    textAreaInputElement.value = textAreaInputValue;

    event.target.parentElement.remove();

    publishButtonElement.disabled = false;
  }
}
