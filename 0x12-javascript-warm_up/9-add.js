#!/usr/bin/node
// Define the function add with the specified prototype
function add(a, b) {
    console.log(parseInt(a) + parseInt(b));
}

// Extract command line arguments
const args = process.argv.slice(2);

// Check if both arguments are provided
if (args.length !== 2) {
    console.log("Usage: node script.js <NaN> <NaN>");
} else {
    // Call the add function with the provided arguments
    add(args[0], args[1]);
}

