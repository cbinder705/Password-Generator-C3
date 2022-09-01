// variables for custom password options
const numbers="0123456789"
const lowercase="abcedefghijklmnopqrstuvwxyz"
const upercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const special = "!@#$%^&*()></"
var pw = " ";
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

function generatePasword(){
  let passwordLength = prompt('Please select a character amount between 8 & 128.');
  if(passwordLength <8 || passwordLength > 128 || isNaN(parseInt(passwordLength)));{ //parse int returns number rather than string
    alert('Please enter a number between 8 and 128.');
  } // remember else
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
  generatePasword();
}
let pword= " "
for (let i=0; i<passwordLength; i++)
pword += pw.charAt(Math.floor(Math.random() * pw.length)) //charAt returns new string
return pword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);

