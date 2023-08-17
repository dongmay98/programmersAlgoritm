function m(x){
  var y = 1;
  return function(z){
    y=100;
    return x+y+z;
  }
}
var add5 = m(5);
var add10 = m(10);
console.log(add5(2));
console.log(add10(2));