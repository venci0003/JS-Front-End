function extractText() {
  const liTags = Array.from(document.getElementsByTagName("li"));

  const textArea = document.getElementById("result");

  for (const li of liTags) {
     textArea.textContent += li.textContent + `\n`;
  }
}
