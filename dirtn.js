function solution(left, right) {
  var answer = 0;
  
  // left부터 right까지 반복
  for (var i = left; i <= right; i++) {
      var count = 0;
      
      // i의 약수 개수 count
      for (var j = 1; j <= i; j++) {
          if (i % j === 0) {
              count++;
          }
      }
      
      // count가 짝수면 더하고, 홀수면 빼기
      if (count % 2 === 0) {
          answer += i;
      } else {
          answer -= i;
      }
  }
  
  return answer;
}