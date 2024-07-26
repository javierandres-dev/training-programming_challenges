/*
4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
*/
function getAreaTriangleWithThreeSides(side1, side2, side3, form) {
  if (form === 'long') {
    const sum1 = side1 + side2 + side3;
    const sum2 = -side1 + side2 + side3;
    const sum3 = side1 - side2 + side3;
    const sum4 = side1 + side2 - side3;
    const multiply = sum1 * sum2 * sum3 * sum4;
    const sqrt = Math.sqrt(multiply);
    return sqrt / 4;
  }
  if (form === 'short') {
    const step1 = (side1 ** 2 + side2 ** 2 - side3 ** 2) ** 2;
    const step2 = 4 * (side1 ** 2 * side2 ** 2);
    const step3 = step2 - step1;
    const sqrt = Math.sqrt(step3);
    return sqrt / 4;
  }
}

console.info(getAreaTriangleWithThreeSides(5, 6, 7, 'long'));
console.info(getAreaTriangleWithThreeSides(5, 6, 7, 'short'));
