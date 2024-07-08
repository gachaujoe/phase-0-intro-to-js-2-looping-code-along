// Code your solutions in this file
const chai = require('chai');
global.expect = chai.expect;

function writeCards(names, action ) {
    // Create a new, empty array to hold the messages
    let messages = [];

    // Iterate through the input array
    for (let i = 0; i < names.length; i++) {
        // Build out the 'thank you' message for each name using string interpolation
        let message = `Thank you, ${names[i]}, for the wonderful ${action} gift!`;

        // Add that message to the new array
        messages.push(message);
    }

    // Return the new array
    return messages;
}


function countDown(number) {
    // Count down from the number provided to zero
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
}
  