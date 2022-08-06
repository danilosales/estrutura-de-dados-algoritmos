export function fibonacciIterative(n) {
  if(n < 1) return 0;
  if(n <= 2) return 1;
  let fibMinus2 = 0;
  let fibMinus1 = 1;
  let fibN = n;
  for(let i = 2; i <= n; i++) {
    fibN = fibMinus1 + fibMinus2;
    fibMinus2 = fibMinus1;
    fibMinus1 = fibN;
  }
  return fibN;
}

function fibonacci(n) {
  if(n < 1) return 0;
  if(n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemoization(n) {
  if (n < 1) { return 0; }
  const memo = [0, 1];
  const fibonacciMem = num => {
    if (memo[num] != null) { return memo[num]; }
    return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
  };
  return fibonacciMem(n);
}
