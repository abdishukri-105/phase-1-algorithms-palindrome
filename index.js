function isPalindrome(word) {
  // Write your algorithm here
  //find the length of string
 const len = word.length

 //loop through half of the word
 for(let i = 0; i < len/2 ; i++){
    // check if first and last word are same
    if (word[i] !== word[len - 1 - i]) {
        return false
       }else{
        return true
       }
   }
}

/* 
  Add your pseudocode here
-create ispalendrome function with a string as parameter
-store length of the string in  a variable
-loop through half of the string
- create if statement block
  -check if first and last string is the same
  -return false if its not the same
  -return true if its the same
  call the function with a word as argument

*/

/*
  Add written explanation of your solution here
- a function that will accept one argument a word 
-loop through half of the string
-returns true if the word is a palindrome
-returns false if it is not palendrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));


}

module.exports = isPalindrome;
