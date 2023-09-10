// 두개 뽑아서 더하기
function solution(numbers) {
  const arr = [];
  
  for(let i=0; i<numbers.length; i++){
      for(let j=i+1; j<numbers.length; j++){
          arr.push(numbers[i]+numbers[j]);
      }        
  }
  
  const set = new Set(arr);    
  const answer = [...set];
  return answer.sort((a,b)=>a-b);
}