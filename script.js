function filterNegative(arr) {
  return arr.filter(num => num >= 0);
}

// Example usage
console.log(filterNegative([5, -3, 0, 9, -1])); // Output: [5, 0, 9]
function diffWith13(n) {
  if (n > 13) {
    return 2 * Math.abs(n - 13);
  } else {
    return 13 - n;
  }
}

// Example usage
console.log(diffWith13(20));  // Output: 14
console.log(diffWith13(10));  // Output: 3
function fibonacciSeries(limit) {
  let fib = [0, 1];
  for (let i = 2; i < limit; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, limit);
}

// Example usage
console.log(fibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
function sumMultiples() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Example usage
console.log(sumMultiples()); // Output: 233168
const cube = new Function("num", "return num * num * num;");

// Example usage
console.log(cube(3)); // Output: 27
console.log(cube(5)); // Output: 125
