// 카카오 비밀지도.

function solution(n, arr1, arr2) {
  var splitArr1 = arr1.map((a, b) => a.toString(2).padStart(n, '0'));
  var splitArr2 = arr2.map((a, b) => a.toString(2).padStart(n, '0'));
  var newArr = splitArr1.map((str1, index) => {
      const str2 = splitArr2[index];
      let newStr = '';

      for (let i = 0; i < str1.length; i++) {
          if (str1[i] === '1' || str2[i] === '1') {
              newStr += '1';
          } else {
              newStr += '0';
          }
      }

      return newStr;
  });
  for(var z=0; z<newArr.length; z++){
      newArr[z] = newArr[z].replace(/1/g,'#');
      newArr[z] = newArr[z].replace(/0/g,' ')
  }

  return newArr;
}
