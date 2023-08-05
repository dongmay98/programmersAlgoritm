function solution(arr1, arr2) {
  return arr1.map((row, rowIndex) => {
      return row.map((value, colIndex) => value + arr2[rowIndex][colIndex]);
  });
}