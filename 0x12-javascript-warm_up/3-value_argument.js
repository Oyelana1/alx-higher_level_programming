#!/usr/bin/node

if (process.argv[2] === undefined) {
  console.log('No argument');
} else {
  const y = process.argv.slice(2)[0];
  console.log(y);
}
