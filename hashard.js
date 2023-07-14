function solution(x) {
  var str = String(x);
  var newArr = Array.from(str).map(Number);
  var total = 0;
  
  for(var i = 0; i<newArr.length; i++){
      total += newArr[i];
  }
  let answer = x%total == 0 ? true : false ;
  
  return answer;
}

console.log(solution(10));
console.log(solution(13));