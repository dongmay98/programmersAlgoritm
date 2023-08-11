// 이상한 문자만들기

function solution(s) {
  var a = s.split(" ");
  var upper = a.map(word => word.toUpperCase());
  var answer = [];
  for (var i = 0; i < upper.length; i++) {
      for (var j = 0; j < upper[i].length; j++) {
          if (j % 2 !== 0) {
              answer.push(upper[i][j].toLowerCase());
          } else {
              answer.push(upper[i][j]);
          }
      }
      console.log(answer.join(''))
      if (i !== upper.length - 1) {
          answer.push(' ');
      }
  }
  return answer.join('');
}
