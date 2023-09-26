// k번째 수\
function solution(array, commands) {
  const answer = [];
  
  for (let command of commands) {
    const [i, j, k] = command;
    
    // 배열 array를 i부터 j까지 자르고 정렬
    const slicedArray = array.slice(i-1, j).sort((a, b) => a - b);
    
    // k번째 숫자를 answer 배열에 추가
    answer.push(slicedArray[k-1]);
  }
  
  return answer;
}