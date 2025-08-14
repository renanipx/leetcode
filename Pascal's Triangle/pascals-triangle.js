/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = Array(numRows);
  triangle[0] = [1];

  for (let i = 1; i < numRows; i++) {
    triangle[i] = Array(i + 1);
    triangle[i][0] = 1;
    triangle[i][i] = 1;
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }
  
  return triangle;
};
