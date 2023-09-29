// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write below this for CODE
var numberOfCharacters = "";
var includeNumbers = "";
var includeSpecialCharacters = "";
var upperCaseletters = "";
var lowerCaseletters = "";

function getARandomNumber(includeNumbers) {
  return Math.floor(Math.random(includeNumbers) * (128 - 8) + 8);
}

var letter = {
  alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  randomletter: function getARandomletter() {
    console.log("");
  }

function getASpecialCharacter() {
    var specialCharacter = "!@#$%^&*"
  var specialCharacterLength = specialCharacter.length;
return Math.floor(Math.random(specialCharacterLength) * (8 - 1) + 1);
}

//Received code from Gary in-class
function generatePassword() {
  numberOfCharacters = prompt("How many characters do you want? (minimum: 8 characters maximum: 128)")
  includeNumbers = confirm("Do you want numbers?")
  includeSpecialCharacters = confirm("Do you want special characters?")
  upperCaseletters = confirm("Do you want uppercase letters?")
  lowerCaseletters = confirm("Do you want lowercase letters?")

  var RandomNumber = getARandomNumber()
  var RandomCharacter = getARandomCharacter()
  return finalPassword = RandomNumber + RandomCharacter;
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
