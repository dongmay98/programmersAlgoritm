//3진법뒤집기

function solution(n) {
  var three = n.toString(3);
  threeArr = three.split("");
  r_threeArr = threeArr.reverse();
  answer = r_threeArr.join("");
  return parseInt(answer,3);
}
