let pascalTriangle = getPascalTriangle(10);
printPascalTriangle(pascalTriangle);

/**
 * Returns an array of arrays.
 * Each array represents a row of the triangle.
 * @param {Number} numOfRows
 */
function getPascalTriangle(numOfRows) {
  numOfRows = Math.max(numOfRows, 1);
  let rows = [];
  for (let i = 0; i < numOfRows; i++) {
    rows.push(getPascalRow(i));
  }
  return rows;
}

/**
 * @param {Number} rowNumber
 * @returns {Number[]} array of the numbers for the row
 */
function getPascalRow(rowNumber) {
  let row = [1];
  for (let i = 0; i < rowNumber; i++) {
    row.push((row[i] * (rowNumber - i)) / (i + 1));
  }
  return row;
}

/**
 * prints the given pascal triangle
 * @param {Number[][]} pascalTriangle
 */
function printPascalTriangle(pascalTriangle) {
  const triangleHeight = pascalTriangle.length;
  const maxLength = pascalTriangle[triangleHeight - 1].toString().length; // last row length
  pascalTriangle.forEach((row) => printPascalRow(row, maxLength));
}

/**
 * print array of number in format of pascal triangle row
 * @param {Number[]} row
 * @param {Number} maxLength max string length
 */
function printPascalRow(row, maxLength) {
  let rowToPrint = row.toString().replaceAll(",", " ");
  rowToPrint = rowToPrint.padStart((maxLength + rowToPrint.length) / 2);
  console.log(rowToPrint);
}
