// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write below this for CODE

//Received code from Gary in-class
function generatePassword() {

  var numberOfCharacters = prompt("How many characters do you want?")
  var includeNumbers = confirm("Do you want numbers?")
  var includeSpecialCharacters = confirm("Do you want special characters?")

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
