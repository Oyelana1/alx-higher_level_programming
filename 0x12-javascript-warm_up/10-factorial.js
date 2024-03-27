#!/usr/bin/node

const factorial = (n) => {
  // Check if n is NaN or less than 0, return 1
  if (isNaN(n) || n < 0) {
    return 1;
  }
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: compute factorial
  return n * factorial(n - 1);
};

// Main function
const main = () => {
  // Get the argument from command line
  const arg = parseInt(process.argv[2]);

  // Calculate factorial
  const result = factorial(arg);

  // Print the result
  console.log(result);
};

// Call main function
main();

