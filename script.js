// prompted to choose password critera
// prompted to choose length
// password criteria selected from character array
// length criteria pulled from character array
// confirm characteristics
// returns should be generated according to prompts

//possible generated passwords
// var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",'t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','!',',','@','#','$','%','^','&','*','(',')','_','+','>','?','<',];





function generatePassword(){

     var lcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",'t','u','v','w','x','y','z'];
     var ucase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
     var numbers = ['1','2','3','4','5','6','7','8','9','0'];
     var symbols = ['!',',','@','#','$','%','^','&','*','(',')','_','+','>','?','<',];
     var passwordOutput = [];

     //ask user for password criteria
     var passwordLength = prompt("Choose password length between 8 and 128");

     if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {
     
     var responseLower = confirm("Would you like to use lowercase letters for your password?");
     var responseUpper = confirm("Would you like to use uppercase letters for your password?");
     var responseNumber = confirm("Would you like to use numbers for your password?");
     var responseSymbol = confirm("Would you like to use special characters letters for your password?");

     if (responseLower === true){
     passwordOutput.push(...lcase);
     }

     if (responseUpper === true){
     passwordOutput.push(...ucase);
     }

     if (responseNumber === true){
     passwordOutput.push(...numbers);
     } 

     if (responseSymbol === true){
     passwordOutput.push(...symbols);
     } 

     var emptyString = [];

     for (let i = 0; i < passwordLength; i++) {
          emptyString.push(passwordOutput[(Math.floor(Math.random() * passwordOutput.length))]); 
     }

          console.log(emptyString)
          return emptyString.join("");

     // return emptyString.join("").toString();

};  
};

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
