function addItem() {
  const ulItems = document.getElementById("items");

  const itemToAdd = document.getElementById("newItemText");

  let newItem = document.createElement("li");
  newItem.textContent = itemToAdd.value;

  let deleteElement = document.createElement("a");
  deleteElement.href = "#";
  deleteElement.textContent = "[Delete]";
  deleteElement.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
  });
  newItem.appendChild(deleteElement);
  ulItems.appendChild(newItem);
}
