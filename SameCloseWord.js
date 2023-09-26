//가장 가까운 같은 글자
function solution(s) {
  let answer = [];
  let arr = [];
  let num = 0;
  for(let i=0;i<s.length; i++){
      if(!arr.includes(s[i])){
          arr.push(s[i]);
          answer.push(-1);
      }else if(arr.includes(s[i])){
          num = arr.lastIndexOf(s[i]);
          arr.push(s[i]);
          answer.push(arr.lastIndexOf(arr[i])-num);
      }
  }
  return answer;
}