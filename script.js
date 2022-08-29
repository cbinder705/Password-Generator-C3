var numbers="01234567890"
var lowercase="abcedefghijklmnopqrstuvwxyz"
var upercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePasword(){
  let pw = " ";
  let passwordLength= 0;
  let numbers;
  let lowercase;
  let upercase;
  let special;
}


let question1 = prompt('Select character amount between 8 & 128');
let question2 = prompt('Include lowercase?');
let question3 = prompt('Include uppercase?');
let question4 = prompt('Include numbers?');
let question5 = prompt('Include special characters?');



console.log(question1);
console.log(question2);
console.log(question3);
console.log(question4);
console.log(question5);
