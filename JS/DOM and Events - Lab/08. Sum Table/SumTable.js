function sumTable() {
  const elements = Array.from(document.querySelectorAll("tr:not(:last-child) td:nth-child(even)"));

  const result = document.getElementById("sum");

  let sum = 0;

  elements.forEach((e) => {
    sum += Number(e.textContent);
  });

  result.textContent = sum;
}
