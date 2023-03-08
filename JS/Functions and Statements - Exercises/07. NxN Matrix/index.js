function matrix(matrixSize) {
  for (let i = 1; i <= matrixSize; i++) {
    let row = "";
    for (let i = 1; i <= matrixSize; i++) {
      row += matrixSize + " ";
    }
    console.log(row);
  }
}
