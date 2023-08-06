//최대공약수 최소공배수 
function solution(n, m) {
  var maxn = [];
  var r = 0;
  for(var i = 1; i <= Math.min(n,m); i++ ){
      n % i==0 && m % i ==0 ? maxn.push(Math.max(i)): false       
  }
  var answer = [];
  answer.push(maxn[maxn.length-1],m*n/maxn[maxn.length-1]);
  
  return answer;
}