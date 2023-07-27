function solution(arr) {
  // 배열의 길이가 1보다 작은 경우, 빈 배열이므로 -1을 채워 반환
  if (arr.length < 2) {
    return [-1];
  }
  
  // 가장 작은 수를 찾기 위해 spread operator를 사용하여 배열 복사
  let sortedArr = [...arr].sort((a, b) => a - b);
  
  // 가장 작은 수와 동일한 값은 모두 제외한 배열을 반환
  return arr.filter(num => num !== sortedArr[0]);
}