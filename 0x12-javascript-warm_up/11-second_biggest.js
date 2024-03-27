#!/usr/bin/node

// Main function
const main = () => {
  // Get the arguments from the command line, converting them to integers
  const numbers = process.argv.slice(2).map(Number);

  // If no arguments passed or only one argument, print 0
  if (numbers.length <= 1) {
    console.log(0);
    return;
  }

  // Sort the numbers in descending order
  const sortedNumbers = numbers.sort((a, b) => b - a);

  // Find the second biggest integer
  let secondBiggest = sortedNumbers[1];

  // Print the result
  console.log(secondBiggest);
};

// Call main function
main();

