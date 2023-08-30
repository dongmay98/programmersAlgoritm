// 숫자문자열과 영단어
function solution(s) {
  const word = {
      zero: 0,
      nine: 9,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      one: 1
  };
  for(var key in word){
      s = s.replaceAll(key,word[key]);
  }
  return parseInt(s);
}