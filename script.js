// prompted to choose password critera
// prompted to choose length
// password criteria selected from character array
// length criteria pulled from character array
// confirm characteristics
// returns should be generated according to prompts

//possible generated passwords
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+>?<:";
var lcase ="abcdefghijklmnopqrstuvwxyz";
var ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "!@#$%^&*()_+>?<:";
var pLength = 128;
var password = "";


//ask user for password criteria
var userResponse = prompt("Which criteria would you like for your password?\nlowercase\nuppercase\nnumbers\nspecial characters\nor any combination", "lowercase");

//ask user for their password length
var passwordLength =  prompt("Choose password length between 8 and 128", "10");

//make font easier to compute
userResponse = userResponse.toUpperCase();

// Getting random array from options

var lower = Math.floor(Math.random() * lcase.length);
var choiceLower = lcase[lower]

// Criteria prompted

if (userResponse == "lowercase") {
  alert(choiceLower)


} else if (userResponse === "lowercase") {
  choiceLower
} else if (userResponse === "uppercase") {
  choiceUpper
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
