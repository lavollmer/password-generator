// Assignment Code
var generateBtn = document.querySelector("#generate");

//Gary information from Wed Class
var numberOfCharacters;
var includeNumbers;
var includeSpecialCharacters;
var includeLowercase;
var includeUppercase;

var finalPassword = ""; //universal value that gets pulled

//Gary information from Wed Class
// this function has one job only - should test each individually to make sure it works
function getARandomNumber() {
  return (Math.floor(Math.random() * 8 + 120)
}

var randomNumber = function getARandomNumber()

//code was received from Wednesday Class (Gary)
function generatePassword() {

  var numberOfCharacters = prompt("How many characters do you want?")
  var includeNumbers = confirm("Do you want numbers?")
  var includeSpecialCharacters = confirm("Do you want special characters?")

  var RandomNumber = getARandomNumber()
  finalPassword = finalPassword + RandomNumber;
}

generatePassword()


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
