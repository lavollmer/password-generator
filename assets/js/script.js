// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write below this for CODE
var numberOfCharacters = "";
var includeNumbers = "";
var includeSpecialCharacters = "";
var upperCaseletters = "";
var lowerCaseletters = "";

//Received code from Gary in-class
function generatePassword() {
  numberOfCharacters = prompt("How many characters do you want? (minimum:8  maximum:128)")
  includeNumbers = confirm("Do you want numbers?")
  includeSpecialCharacters = confirm("Do you want special characters?")
  upperCaseletters = confirm("Do you want uppercase letters?")
  lowerCaseletters = confirm("Do you want lowercase letters?")

  function generateCharacterLength() {
    console.log(numberOfCharacters * 1);
  }

  if (includeNumbers === true) {
    function getARandomNumber() {
      Math.floor(Math.random);
    }
  }

  if (includeSpecialCharacters === true) {
    function getARandomCharacter() {
      console.log("!@#$%^&*");
    }
  }

  if (upperCaseletters === true) {
    function getUpperCase() {

    }
  }

  if (lowerCaseletters === true) {
    function getLowercase() {

    }
  }

  generateCharacterLength()
  var RandomCharacter = getARandomCharacter()
  var RandomNumber = getARandomNumber()
  var RandomUppercase = getUpperCase()
  var RandomLowercase = getLowerCase()

  for (var x = 8; x < 128, x;) {
    return finalPassword = RandomCharacter + RandomNumber + RandomUppercase + RandomLowercase;
  }
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
