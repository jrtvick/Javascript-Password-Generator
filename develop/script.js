// Assignment Code part 1 of 2
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



//My code starts here!

// Establishing variables for all acceptable password characters in four separate arrays.
var uppercaseABC = ["A","B","C","D",'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialSymbols = ["!","@","#","$","%","^","&","*","(",")","?","/","<",">",",",".",":",";"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];

// This function is the crux of the password generation, all of the action happens in here.
function generatePassword() {

// These variables play a role in generating and returning the password in different blocks lower down in my code, most notably the Math variable work towards the bottom.
var combinedChars = [];
var pwString = "";

// Setting up all the variables to meet the assignment criteria through the use of prompt and confirm boxes. Beginning with the password length below.
var keyLength = prompt("Please choose a password length between 8 and 128 characters. \n\nClick OK to continue.");  

// I have to pause the flow of questions to validate the password length. Here I'm using a nested if statement to ensure the user applies the correct password length & format.
if (keyLength < 8 || keyLength > 128) {
  alert("Your selection must be between 8 and 128 characters. \n\nPress the Generate Password button to try again.");
  return pwString;
}

// Returning to the variables to meet the assignment criteria. Users will be able choose which of these four options they want to apply to their final password.
var uppercase = confirm("Include Uppercase Letters? \n\nClick OK for yes and cancel for no.");
var lowercase = confirm("Include Lowercase Letters? \n\nClick OK for yes and cancel for no.");
var symbols = confirm("Include Symbols and Special Characters? \n\nClick OK for yes and cancel for no.");
var numbers = confirm("Include Numbers? \n\nClick OK for yes and cancel for no.");

// Establishing a nested if statement to check for password selections. If nothing is selected, the entry is invalid.
if (uppercase === false && lowercase === false && numbers === false && symbols === false) {
    alert("Invalid entry. At least one option must be selected.");
    return pwString;
} 

// These nested if statements concatinate the user's selections from the confirmations and prompt together.
if (uppercase === true) {
    combinedChars = combinedChars.concat(uppercaseABC);
   }
if (lowercase === true) {
    combinedChars = combinedChars.concat(lowercaseABC);
   }
if (symbols === true) {
    combinedChars = combinedChars.concat(specialSymbols);
   }
if (numbers === true) {
    combinedChars = combinedChars.concat(numeric);
   }

// This for loop accomplishes the math portion of my password generation. It takes the information from the keyLength, pwString, and combinedChars variables and returns a randomized combination to the user.
for(var i = 0; i < keyLength; i++) {
    var mathFloor = Math.floor(Math.random() * combinedChars.length);
    pwString = pwString + combinedChars[mathFloor];
   }
  return pwString; 
}

// My code ends here!



// Assignment Code part 2 of 2
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


