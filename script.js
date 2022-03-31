// User prompted to choose password criteria (check)
// User prompted to choose length of password (check)
// Based on choices, password is given 
    // individual string is randomized within the criteria (check)
    // run a for loop to get the proper length of the password
    // display password in text box



var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "!@#$%^&*()";
var pLength = 10;
var password = "";

var generatePassword = function () {

// Ask user for password criteria
var userResponse = prompt("Which criteria would you like for your password?\nlower\nupper\nnumbers\nspecial characters\nor any combination", "lowercase");

// Ask user for passwork length
var length =  prompt("Choose password length between 8 and 128", "10");


}

// Get random index from array of options (lowercase)
var indexLower = Math.floor(Math.random() * lower.length);
var letterLower = lower[indexLower];
console.log(letterLower);

// Get random index from array of options (uppercase)
var indexUpper = Math.floor(Math.random() * upper.length);
var letterUpper = upper[indexUpper];
console.log(letterUpper);

// Get random index from array of options (numbers)
var indexNumbers = Math.floor(Math.random() * numbers.length);
var letterNumbers = numbers[indexNumbers];
console.log(letterNumbers);

// Get random index from array of options (symbols)
var indexSymbols = Math.floor(Math.random() * symbols.length);
var letterSymbols = symbols[indexSymbols];
console.log(letterSymbols);


// Based on choices, password criteria is chosen
if (userResponse = "lowercase") { 
     for (let i = 0; i < lower.length; i++)
     console.log(i) ;
} else if (userResponse = "uppercase") {
     for (let i = 0; i < upper.length; i++)
     console.log(i);
} else if (userResponse = "numbers") {
     for (let i = 0; i < numbers.length; i++)
     console.log(i);
} else if (userResponse = "symbols") {
     for (let i = 0; i < symbols.length; i++)
     console.log(i);
}





// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
