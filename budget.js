// 예산
function solution(d, budget) {
  var answer = 0;
  var sort_d = d.sort((a,b)=>a-b);
  var sum = 0;
  for(let i=0; i<sort_d.length; i++){
      sum+=sort_d[i];
      if(sum<=budget){
          answer++;
      }
  }
  return answer;
}
  