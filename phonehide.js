function solution(phone_number) {
  var arr = [...phone_number].map(Number);
  var answer = '';
  
  for(var i = 0; i<arr.length-4; i++){
      answer += arr[i] = "*"; //*넣기
  }
  for(var i=arr.length-4; i<arr.length; i++){
      answer += arr[i] ; //뒤에서 부터 4자리 숫자받아서 넣기
  }
  return answer;
}