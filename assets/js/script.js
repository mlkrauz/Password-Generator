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
  //By putting the content of the password generation within a try..catch, we can exit if the user cancels.
  try {
    var passLength = promptLength();
    var characterTypes = [];
    


    return "" + passLength;
  } catch (error) {
    //This will be returned if the labeled block above is broken by canceling.
    return "Password generation cancelled."
  }
}

function promptLength() {
  var userInput = handlePrompt("What is the desired character length of your password? (8-128): ", 32);

  if (!isNaN(userInput) && userInput >= 8 && userInput <= 128) {
    return userInput;
  } else {
    alert("Invalid selection. Please try again!");
    promptLength();
  }
}

//------------------------------------
//----------Helper Functions----------
//------------------------------------

function handlePrompt(message, defaultAnswer) {
  var userInput = prompt(message, defaultAnswer);
  checkForCancel(userInput);
  return userInput;
}

function checkForCancel(userInput) {
  if (userInput === null || userInput == "") {
    var cancelConfirm = confirm("Are you sure you want to quit the password generator? OK to confirm, cancel to be taken back.");
    if (cancelConfirm == true) {
      //Throw an error to cancel
      throw "User cancellation exception."
    } else {
      return;
    }
  }
}