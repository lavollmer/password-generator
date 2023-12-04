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
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
var characterPool = [];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "<", "."]

function generatePassword() {
  var numberOfCharacters = prompt("How many characters do you want? (minimum:8  maximum:128)")
  console.log(numberOfCharacters);

  if(!(numberOfCharacters >= 8 || numberOfCharacters <= 128)) {
    alert("Number needs to be a minimum of 8 characters and maximum of 128 characters")
    var numberOfCharacters = prompt("How many characters do you want? (minimum:8  maximum:128)")
  console.log(numberOfCharacters);
  } 

  var includeNumbers = confirm("Do you want numbers?")
  console.log(includeNumbers);

  var includeSpecialCharacters = confirm("Do you want special characters?")
  console.log(includeSpecialCharacters);

  var upperCaseLetters = confirm("Do you want uppercase letters?")
  console.log(upperCaseLetters);

  var lowerCaseLetters = confirm("Do you want lowercase letters?")
  console.log(lowerCaseLetters);


  //If user says yes (true), I need to create a random number
  if (includeNumbers === true) {
    characterPool = characterPool.concat(numbersArray);
  }

  // If user says yes (true),I need to include a random special character
  if (includeSpecialCharacters === true) {
    characterPool = characterPool.concat(specialCharacter);
  }

  //If user says yes (true), I need to include a random upper case letter
  if (upperCaseLetters === true) {
    characterPool = characterPool.concat(alphabet);
  }

  // If user says yes(true), I need to include a random lower case number
  if (lowerCaseLetters === true) {
    characterPool = characterPool.concat(lowerCaseAlphabet);
  }
  console.log(characterPool);

  var finalPassword = [];

  //generate final password with character length specified 
  for (var i = 0; i < numberOfCharacters; i++) {
    // select single random index from characterpool based on the characterpool's current length
    var getIndex = Math.floor(Math.random() * characterPool.length)
    //convert random index to true character value
    var characterValue = characterPool[getIndex];
    finalPassword.push(characterValue);
    console.log(finalPassword);
  }
  return finalPassword.join("");
}


