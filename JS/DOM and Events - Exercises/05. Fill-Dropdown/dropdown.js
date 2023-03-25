function addItem() {
    const itemTextElement = document.getElementById("newItemText");

    const itemValueElement = document.getElementById("newItemValue");

    const menu = document.getElementById("menu");

    const newOptionElement = document.createElement("option");

    newOptionElement.textContent = itemTextElement.value;
    
    newOptionElement.value = itemValueElement.value;

    menu.appendChild(newOptionElement);

    itemTextElement.value = "";

    itemValueElement.value = "";
}
