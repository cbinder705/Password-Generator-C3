// variables for custom password options
var numbers="0123456789"
var lowercase="abcedefghijklmnopqrstuvwxyz"
var upercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()></"
let pw = " ";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pw = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePasword(){
  let passwordlength = prompt('Please select a character amount between 8 & 128.');
  if(passwordlength <8 , passwordlength > 128);
  let littleLetters = confirm('Include lowercase?');
  if (littleLetters){
    pw+=lowercase
  };
  let bigLetters = confirm('Include uppercase?');
  if (bigLetters) {
    pw+=upercase
  };
  let num = confirm('Include numbers?');
  if (num){
    pw+=numbers
  };
  let sCharacters = confirm('Include special characters?');
  if(sCharacters){
    pw+=special
  };

}



generatePasword();



console.log(passwordlength);
console.log(littleLetters);
console.log(bigLetters);
console.log(num);
console.log(sCharacters);
