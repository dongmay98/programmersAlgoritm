function solution(s) {
  const pattern = /^\d{4}$|^\d{6}$/;
  return pattern.test(s);
}