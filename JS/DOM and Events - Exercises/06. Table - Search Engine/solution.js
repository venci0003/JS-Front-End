function solve() {
  document.getElementById("searchBtn").addEventListener("click", OnClick);

  function OnClick() {
    clear();
    const inputValue = document.getElementById("searchField").value;
    const informationList = Array.from(
      document.querySelectorAll(".container tbody tr td")
    );
    informationList.forEach((td) => {
      if (td.textContent.includes(inputValue)) {
        td.parentElement.classList.add("select");
      }
    });
  }

  function clear() {
    let trElements = document.querySelectorAll(".container tbody tr ");
    Array.from(trElements).forEach((tr) => {
      tr.classList.remove("select");
    });
  }
}
