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
var pLength = ["128"]
var password = "";


//ask user for password criteria
var userResponse = prompt("Which criteria would you like for your password?\nlowercase\nuppercase\nnumbers\nspecial characters\nor any combination", "lowercase");


//ask user for their password length
var passwordLength =  prompt("Choose password length between 8 and 128", "10");

//make font easier to compute
userResponse = userResponse.toUpperCase();

// using userResponse to generate password criteria

if (userResponse = "lowercase") { 
  console.log(lcase);
} else if (userResponse = "uppercase") {
  console.log("ucase");
} else if (userResponse = "numbers") {
  console.log("numbers");
} else if (userResponse = "symbols") {
  console.log("symbols");
}

console.log(passwordLength)




var n = passwordLength;

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




// WHATS LEFT

// TODO: Lowercase, Uppercase => Lowercase + Uppercase (lcase + ucase)
// TODO: Password Length 




// var lower = characters.charAt(Math.floor(Math.random() * characters.length));
// for (let i = 0; i < characters.length; i++) {
//   console.log(lcase.length)
// }


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
