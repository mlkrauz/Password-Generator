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
    var characterList = promptCharacterTypes();

    return passLength, characterList;

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
  var userInput = handlePrompt("What combination of character types should your password contain? " + 
    "Type 1 for lower case, 2 for upper case, 3 for numbers, 4 for special characters.", "1234")

  if (userInput.includes("1") || userInput.includes("2") || userInput.includes("3") || userInput.includes("4")) {
    var characterList = [];

    //Update characterList to reflect the selected types.
    for (var i = 1; i <= 4; i++) {
      if (userInput.includes(i)) {
        switch (i) {
          case 1:
            characterList = characterList.concat(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);
            break;
          case 2:
            characterList = characterList.concat(['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']);
            break;
          case 3:
            characterList = characterList.concat(['0','1','2','3','4','5','6','7','8','9']);
            break;
          case 4:
            characterList = characterList.concat(['!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';',
              '<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']);
            break;
        }
      }
    }
    //And return that list
    console.log(characterList);
    return characterList;

  } else if (userInput == null) {
      return promptCharacterTypes();
  } else {
      alert("Invalid selection. Please try again!");
      return promptCharacterTypes();
  }

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