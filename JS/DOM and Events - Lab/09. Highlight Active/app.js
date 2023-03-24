function focused() {
  const inputList = Array.from(document.getElementsByTagName("input"));

  for (const singleInputElement of inputList) {
    singleInputElement.addEventListener("focus", handleFocus);
    singleInputElement.addEventListener("blur",handleBlur);
  }

  function handleFocus(event) {
    const currentChildElement = event.target;
    const parentDiv = currentChildElement.parentElement;
    parentDiv.classList.add("focused");
  }

  function handleBlur(event){
    const currentChildElement = event.target;
    const parentDiv = currentChildElement.parentElement;

    if (parentDiv.classList.contains("focused")) {
      parentDiv.classList.remove("focused");
    }
  }
}
