// variables for custom password options
var numbers="0123456789"
var lowercase="abcedefghijklmnopqrstuvwxyz"
var upercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()></"
var pw = " ";
var generateBtn = document.querySelector("#generate");

function generatePasword(){
  let passwordlength = prompt('Please select a character amount between 8 & 128.');
  if(passwordlength <8 || passwordlength > 128 || isNaN(parseInt(passwordlength)));{
    alert('Please enter a number between 8 and 128.');
  }else 
    {
  let littleLetters = confirm('Include lowercase?');
  if (littleLetters){
    pw+=lowercase;
  }
  let bigLetters = confirm('Include uppercase?');
  if (bigLetters) {
    pw+=upercase;
  }
  let num = confirm('Include numbers?');
  if (num){
    pw+=numbers;
  }
  let sCharacters = confirm('Include special characters?');
  if(sCharacters){
    pw+=special;
  }
}
let pword= " "
for (let i=0; i<passwordlength; i++)
pword += pw.charAt(Math.floor(Math.random() * pw.length))
return pword;
}

function writePassword()



console.log(passwordlength);
console.log(littleLetters);
console.log(bigLetters);
console.log(num);
console.log(sCharacters);


// Write password to the #password input
function writePassword() {
  var pw = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
