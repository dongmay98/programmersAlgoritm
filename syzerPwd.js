//서동현
//시저암호
function solution(s, n) {  
  let arrS = s.split("");
  let arrCharcode = arrS.map((arr) => arr.charCodeAt(0));
  let arr = [];

  for (let i = 0; i < arrCharcode.length; i++) {
      if (65 <= arrCharcode[i] && arrCharcode[i] <= 90) { // 대문자
          let shiftedCharCode = arrCharcode[i] + n;
          if (shiftedCharCode > 90) {
              shiftedCharCode = shiftedCharCode - 26;
          }
          arr.push(shiftedCharCode);
      } else if (97 <= arrCharcode[i] && arrCharcode[i] <= 122) { // 소문자
          let shiftedCharCode = arrCharcode[i] + n;
          if (shiftedCharCode > 122) {
              shiftedCharCode = shiftedCharCode - 26;
          }
          arr.push(shiftedCharCode);
      } else {
          arr.push(arrCharcode[i]); // 기타 문자는 그대로 추가
      }
  }

  let answer= arr.map(code => String.fromCharCode(code)).join("");
  return answer;
}