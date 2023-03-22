function addItem() {
  const inputTag = document.getElementById("newItemText");

  const ulList = document.getElementById("items");

  ulList.innerHTML += `<li>${inputTag.value}</li>`;
}
