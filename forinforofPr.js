let arr = [1, 2, 3,4,5 ]; 
let result = 0;

let abj = {a : 1 , b : 2, c : 3, d : 4, e : 5};
let result2 = 0;

for(let i of arr){
  result += i ;
}

console.log("arr value의 합" + result);

for(let key in obj){
  result2 += obj[key];
}

console.log("obj value의 합" + result2)