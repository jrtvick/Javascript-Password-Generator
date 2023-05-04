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



//my code starts here

//Setting up variables
var uppercase = confirm("For your safety, your password should have an uppercase letter! \NClick OK to continue");
var lowercase = confirm("For your safety, your password should have a lowercase letter! \NClick OK to continue");
var symbols = confirm("For your safety, your password should have a symbol! \NClick OK to continue");
var numbers = confirm("For your safety, your password should have a number! \NClick OK to continue");
var keyLength = prompt("Password must be between 8 and 128 characters! \NClick OK to continue");

// Password variables for allowable passwords characters
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
var specialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
var numeric ="0123456789"
var multiSelect =[];


//Making sure the user applies the correct password length & format
if (keyLength < 8 || keyLength > 128) {
  alert("Your password does not meet the criteria");
  var keyLength = prompt("Password must be between 8 and 128 characters in length.");
}

if (uppercaseABC === false && lowercaseABC === false && specialSymbols === false && numeric === false) {
  return "Your passwords does not meet the password critia";
  };
  
  var uppercaseABC = confirm("Your password should have an uppercase letter!");
  var lowercaseABC = confirm("Your password should have a lowercase letter!");
  var specialSymbols = confirm("Your password should have a symbol!");
  var numeric = confirm("Your password should have a number!");

//I want this pop up when the button gets pressed
//window.alert("Welcome to the Secure Password Generator");

window.alert("click", + "Do you want to generate a secure password?")


// other
//var generatePassword() =

function generatePassword() {
  return 
}