#!/usr/bin/node
/**
 * This JavaScript script demonstrates the order of execution for synchronous and asynchronous operations.
 * It uses console.log to print messages and the setTimeout function for an asynchronous operation.
 */

// Log to the console "Start of the execution queue"
console.log('Start of the execution queue');

// Log to the console "Final code block to be executed" using setTimeout with delay of 0
setTimeout(() => {
  console.log('Final code block to be executed');
}, 0);

// Using a loop that iterates 100 times, each iteration logs to the console the iteration number
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Log to the console "End of the loop printing"
console.log('End of the loop printing');

