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



//------------------------------------
//-----------Main Function------------
//------------------------------------
function generatePassword() {
  //By putting the content of the password generation within a try..catch, we can exit if the user cancels.
  try {
    var passLength = promptLength();
    var characterTypes = promptCharacterTypes();

    return "" + passLength;

  } catch (error) {
    //This will be returned if the labeled block above is broken by canceling. Or if something breaks. Your guess is mine.
    return "Password generation cancelled."
  }
}

//------------------------------------
//----------Prompt Functions----------
//------------------------------------
function promptLength() {
  var userInput = handlePrompt("What is the desired character length of your password? (8-128): ", 32);

  if (!isNaN(Number(userInput)) && userInput >= 8 && userInput <= 128) {
    return userInput;
  } else if (userInput == null) { //This occurs when a prompt is cancelled, but the user returns to resume.
     return promptLength();  
  } else {
    alert("Invalid selection. Please try again!");
    return promptLength();
  }
}

function promptCharacterTypes() {
  var characterTypes = [lowerCase, upperCase, numerics, specialChars];
}

//------------------------------------
//----------Helper Functions----------
//------------------------------------
function handlePrompt(message, defaultAnswer) {
  var userInput = prompt(message, defaultAnswer);
  if (checkForCancel(userInput)) {
    return userInput;
  } else {
    //User cancelled but then returned.
    return null;
  }
}

function checkForCancel(userInput) {
  if (userInput === null) { //This occurs when the user hits the cancel button.
    var cancelConfirm = confirm("Are you sure you want to quit the password generator? OK to confirm, cancel to be taken back.");
    if (cancelConfirm == true) {
      //Throw an error to cancel
      throw "User cancellation exception."
    } else {
      //Return false so we understand when the "cancelled cancel" situation occurs.
      return false;
    }  
  } else {
    //input is not null, user did not cancel.
    return true;
  }
}