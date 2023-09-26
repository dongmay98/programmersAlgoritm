// programmers 포켓몬(해쉬)

function solution(nums) {
  var answer = 0;
  var array = [...new Set(nums)];
  console.log(array);
  if(nums.length/2 < array.length){
      answer = nums.length/2;
  }else{
      answer = array.length;
  }
  return answer;
}