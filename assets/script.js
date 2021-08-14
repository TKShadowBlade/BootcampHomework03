// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // write prompt for password length between 8 and 128 chars
  
  // write 4 confirms for character types lowercase, uppercase, numbers,
  // and special characters
  // make conditional statement to move through confirms
  // add alert if nothing is selected, saying at least one must be picked

  // write for loop for password length that stops based on userChoice length
  // write for loop that pulls random chars from var chars string
    // based on userChoice character types

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
