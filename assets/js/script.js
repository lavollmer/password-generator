// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Write below this for CODE
var numbersArray = ["1", "2", "3"];
var characterPool = [];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ["!", "@", "#"]

function generatePassword() {
  var numberOfCharacters = prompt("How many characters do you want? (minimum:8  maximum:128)")
  console.log(numberOfCharacters);

  var includeNumbers = confirm("Do you want numbers?")
  console.log(includeNumbers);

  var includeSpecialCharacters = confirm("Do you want special characters?")
  console.log(includeSpecialCharacters);

  var upperCaseLetters = confirm("Do you want uppercase letters?")
  console.log(upperCaseLetters);

  var lowerCaseLetters = confirm("Do you want lowercase letters?")
  console.log(lowerCaseLetters);

  // I need to determine the length of the password based on user input
  // function generateCharacterLength() {
  //   console.log(numberOfCharacters);
  // }

  //If user says yes (true), I need to create a random number
  if (includeNumbers === true) {
    // function getARandomNumber() {
    //   var x = (Math.floor(Math.random() * (100 - 0 + 1) + 0))
    // }
    characterPool = characterPool.concat(numbersArray);
  }

  // If user says yes (true),I need to include a random special character
  if (includeSpecialCharacters === true) {
    // function getASpecialCharacter() {
    //   var result = "";
    //   var specialCharacterOption = "!@#$%^&*<>";
    //   result = console.log(specialCharacterOption);
    // }
    characterPool = characterPool.concat(specialCharacter);
  }

  //If user says yes (true), I need to include a random upper case letter
  if (upperCaseLetters === true) {
    // function getUpperCase() {
    //   var upperCaseOption = "";
    //   upperCaseOption = console.log(alphabet);
    // }
    characterPool = characterPool.concat(alphabet);
  }

  // If user says yes(true), I need to include a random lower case number
  if (lowerCaseLetters === true) {
    // function getLowercase() {
    //   var lowerCaseOption = "";
    //   lowerCaseOption = console.log(lowerCaseAlphabet);
    // }
    characterPool = characterPool.concat(lowerCaseAlphabet);
  }
  console.log(characterPool);
  // generateCharacterLength()

  // var RandomNumber = getARandomNumber()
  // var RandomSpecialCharacter = getASpecialCharacter()
  // var RandomUppercase = getUpperCase()
  // var RandomLowercase = getLowercase()
  var finalPassword = [];
  //generate final password with character length specified 
  for (var i = 0; i < numberOfCharacters; i++) {
    // select single random index from characterpool based on the characterpool's current length
    var getIndex = Math.floor(Math.random() * characterPool.length)
    //convert random index to true character value
    var characterValue = characterPool[getIndex];
    finalPassword.push(characterValue);
    console.log(finalPassword);
    // return finalPassword = RandomSpecialCharacter + RandomNumber + RandomUppercase + RandomLowercase;
  }
  return finalPassword.join("");
}

// generatePassword()

// Write password to the #password input

