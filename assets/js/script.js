// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write below this for CODE

//I need to declare variables within a global scope to +- user input
var numberOfCharacters = "";
var includeNumbers = "";
var includeSpecialCharacters = "";
var upperCaseletters = "";
var lowerCaseletters = "";
var x = "";

//Received code from Gary in-class (lines 12 -17)
function generatePassword() {
  numberOfCharacters = prompt("How many characters do you want? (minimum:8  maximum:128)")
  includeNumbers = confirm("Do you want numbers?")
  includeSpecialCharacters = confirm("Do you want special characters?")
  upperCaseletters = confirm("Do you want uppercase letters?")
  lowerCaseletters = confirm("Do you want lowercase letters?")

  // I need to determine the length of the password based on user input
  function generateCharacterLength() {
    var x = numberOfCharacters * 1;
    console.log(x);
  }

  //If user says yes (true), I need to create a random number
  if (includeNumbers === true) {
    function getARandomNumber() {
      Math.floor(Math.random);
    }
  }

  // If user says yes (true),I need to include a random special character
  if (includeSpecialCharacters === true) {
    function getASpecialCharacter() {
      console.log(includeSpecialCharacters.random("!@#$%^&*"));
    }
  }

  //If user says yes (true), I need to include a random upper case letter
  if (upperCaseletters === true) {
    function getUpperCase() {
      var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      return alphabet.random()
    }
  }

  // If user says yes(true), I need to include a random lower case number
  if (lowerCaseletters === true) {
    function getLowercase() {

    }
  }

  generateCharacterLength()
  var RandomSpecialCharacter = getASpecialCharacter;
  var RandomNumber = getARandomNumber()
  var RandomUppercase = getUpperCase()
  var RandomLowercase = getLowercase()

  //generate final password with character length specified 
  for (var x = 8; x < 128, x;) {
    return finalPassword = RandomSpecialCharacter + RandomNumber + RandomUppercase + RandomLowercase;
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
