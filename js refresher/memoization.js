
//Function to be memoized
function expensiveFunction(n) {
  console.log("Computing...");
  // Simulating a time-consuming computation
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

// Memoization wrapper function
function memoize(func) {
  const cache = {};
  return function (n) {
    if (n in cache) {
      console.log("Fetching from cache...");
      return cache[n];
    } else {
      const result = func(n);
      cache[n] = result;
      return result;
    }
  };
}

// Using memoization
const memoizedFunction = memoize(expensiveFunction);
console.log(memoizedFunction(5)); // Computing... 15
console.log(memoizedFunction(6)); // Fetching from cache... 15
console.log(memoizedFunction(7)); // Fetching from cache... 15



console.log(memoizedFunction(5)); // Fetching from cache... 15
console.log(memoizedFunction(6)); // Fetching from cache... 15