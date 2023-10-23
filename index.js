function isPalindrome(word) {
  // Write your algorithm here
    function stringReverse(string){
      return string.split('').reverse().join('');
  }
  const input = `robot`
  const reversedString=stringReverse(input) 

  function reverseChecker(){
      if(input===reversedString){
          console.log(true)
      }
      else(console.log(false))
  }
  reverseChecker()
}

/* 
  Add your pseudocode here
  create a function that reversees the input it is given
  once the function is created create a variable that will take the function and the string as an argument
  create another function that checks if the values are same when reversed
*/

/*
  Add written explanation of your solution here
  the function stringReverse() is used to turn the string of values into an array and also reverses it.
  The function is then assigned a variable which it will take the input as an argument
  The function reverseChecker() takes the value from the function assigned variable and input and checks if theyre the same  when reversed.If so, the value will return true
  if not it will return false . 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
