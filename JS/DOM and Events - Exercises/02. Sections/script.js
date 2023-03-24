function create(words) {
  const content = document.getElementById("content");

  for (const word of words) {
    const newParagraph = document.createElement("p");

    const newDiv = document.createElement("div");

    newParagraph.textContent = word;

    newParagraph.style.display = "none";

    newDiv.addEventListener("click", () => {
      newParagraph.style.display = "block";
    });

    newDiv.appendChild(newParagraph);
    content.appendChild(newDiv);
  }
}
