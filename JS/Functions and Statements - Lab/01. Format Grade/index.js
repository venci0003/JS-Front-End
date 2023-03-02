function formatGrade(gradeValue) {
  if (gradeValue < 3.0) {
    return `Fail (${gradeValue})`;
  } else if (gradeValue >= 3.0 && gradeValue < 3.5) {
    return `Poor (${formatToSecond(gradeValue)})`;
  } else if (gradeValue >= 3.5 && gradeValue < 4.5) {
    return `Good (${formatToSecond(gradeValue)})`;
  } else if (gradeValue >= 4.5 && gradeValue < 5.5) {
    return `Very good (${formatToSecond(gradeValue)})`;
  } else if (gradeValue >= 5.5) {
    return `Excellent (${formatToSecond(gradeValue)})`;
  }

  function formatToSecond(value) {
    return value.toFixed(2);
  }
}
