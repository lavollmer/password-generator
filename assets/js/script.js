// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write below this for CODE

function getARandomNumber() {
  return Math.floor(Math.random() * (128 - 8) + 8);
}

getARandomNumber()

//Received code from Gary in-class
function generatePassword() {
  var numberOfCharacters = prompt("How many characters do you want?")
  var includeNumbers = confirm("Do you want numbers?")
  var includeSpecialCharacters = confirm("Do you want special characters?")
  var upperCaseletters = confirm("Do you want uppercase letters?")
  var lowerCaseletters = confirm("Do you want lowercase letters?")

  var RandomNumber = getARandomNumber()
  finalPassword = finalPassword + RandomNumber;
}

generatePassword()


//DO NOT CHANGE BELOW CODE
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
