//푸드파이터
function solution(food) {
  const foodList = food.filter((f, i) => i !== 0);
  const makeEvenFood =  foodList.map((f) => f%2!==0 ? f-1 : f);
  const availableFood = makeEvenFood.map((f, i) => String(i+1).repeat(f/2));
  const result = availableFood.concat([0]).concat(availableFood.reverse())
  return result.join('');
}