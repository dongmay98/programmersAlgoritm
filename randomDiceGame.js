const getCaculatedDiceResult = (result) => {
  const countObj = {};
  for (const el of result) {
    if (countObj[el]) {
      countObj[el]++;
    } else {
      countObj[el] = 1;
    }
  }

  const countArr = Object.values(countObj);
  const maxCount = Math.max(...countArr);
  const maxIdx = countArr.indexOf(maxCount);
  const duplicatedTarget = result[maxIdx];

  if (maxCount === 3) {
    return 10000 + duplicatedTarget * 1000;
  } else if (maxCount === 2) {
    return 1000 + duplicatedTarget * 100;
  } else {
    return Math.max(...result) * 100;
  }
};