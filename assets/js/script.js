// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Main function to generate password
function generatePassword() {
  var passLength = promptLength();
  var characterTypes = [];


  return "" + passLength;
}

function promptLength() {
  var userValue = prompt("What is the desired character length of your password? (8-128): ", 32);

  //reminder for later: confirm that javascript boolean logic short circuits. I'm on a flight at the time of typing this.
  if (!isNaN(userValue) && userValue >= 8 && userValue <= 128) {
    return userValue;
  } else {
    alert("Invalid selection. Please try again!");
    promptLength();
  }
  //todo: modify handling when the user cancels mid-prompt
}