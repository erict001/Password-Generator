// prompted to choose password critera
// prompted to choose length
// password criteria selected from character array
// length criteria pulled from character array
// confirm characteristics
// returns should be generated according to prompts

//possible generated passwords
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",'t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','!',',','@','#','$','%','^','&','*','(',')','_','+','>','?','<',];
var lcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",'t','u','v','w','x','y','z'];
var ucase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var symbols = ['!',',','@','#','$','%','^','&','*','(',')','_','+','>','?','<',];
var pLength = n;
var passwordOutput = [];






//ask user for password criteria
var passwordLength = prompt("Choose password length between 8 and 128", "10");
var responseLower = prompt("Would you like to use lowercase letters for your password?", "y or n");
if (responseLower === "y"){
  passwordOutput.push(lcase)
  console.log(passwordOutput)
} else {
} 

var responseUpper = prompt("Would you like to use uppercase letters for your password?", "y or n");
if (responseUpper === "y"){
  passwordOutput.push(ucase)
  console.log(passwordOutput)
} else {
} 

var responseNumber = prompt("Would you like to use numbers for your password?", "y or n")
if (responseNumber === "y"){
  passwordOutput.push(number)
  console.log(passwordOutput)
} else {
} 

var responseSymbol = prompt("Would you like to use special characters letters for your password?", "y or n");
if (responseSymbol === "y"){
  passwordOutput.push(symbols)
  console.log(passwordOutput)
} else {
} 

//var userRespone = [responseLower + responseUpper + responseNumber + responseSymbols],

//make font easier to compute
responseLower = responseLower.toUpperCase();
responseUpper = responseUpper.toUpperCase();
responseNumber = responseNumber.toUpperCase();
responseSymbol = responseSymbol.toUpperCase();

// using userResponse to generate password criteria
var indexCharacters = Math.floor(Math.random() * characters.length);
var computerChoice = characters[indexCharacters];
  
for (let i = 0; i < n; i++)
  console.log ("random")

//console.log("The computer chose " + computerChoice);

// Repeat the length of the password


// Create filter for if then statement
// If "lowercase" filter all lower case characters from index
// If "uppercase" filter all upper case characters from index
// If "symbols" filter all symbol characters from index
// map items



// if then statement for userResponse

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
