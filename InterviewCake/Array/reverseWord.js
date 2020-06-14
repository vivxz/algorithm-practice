/*
You're working on a secret team solving coded transmissions.

Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. 
The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words.
*/

function reverseWords(message) {

  // Decode the message by reversing the words
  message = message.join('').split(' '); // split creates a new array
  
  var left = 0;
  var right = message.length - 1;
  
  while (left < right) {
    var temp = message[left];
    message[left] = message[right];
    message[right] = temp;
    left++;
    right--;
  }
  message = message.join(' ')
  return message;
}