function colorize() {
  const elements = Array.from(document.getElementsByTagName("tr"));

  elements.forEach((e, index) => {
    if (index % 2 !== 0) {
      e.style.backgroundColor = "Teal";
    }
  });
}
