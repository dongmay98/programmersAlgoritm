function solution(a, b) {
  if (a > b) {
      var temp = a;
      a = b;
      b = temp;
  }
  var answer = 0;
  for(var i =a; i<=b; i++){
      answer += i;
  }
  return answer;
}
console.log(solution(3,5));