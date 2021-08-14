// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var chosenChars = []
var password = ""

// Write password to the #password input
function writePassword() {
  // write prompt for password length between 8 and 128 chars
let pwLength = prompt("How many characters between 8 and 128?") 

  

// write 4 confirms for character types lowercase, uppercase, numbers,
  // and special characters
  let lowerCaseConfirm = confirm("Include Lower Case?")
  let upperCaseConfirm = confirm("Include Upper Case?")
  let numberConfirm = confirm("Include Numbers?")
  let specialConfirm = confirm("Include Special Characters?")
  
  // set conditions for password character selection
  if (lowerCaseConfirm){
    chosenChars = chosenChars.concat(lowerCasedCharacters)
  }
  if (upperCaseConfirm){
    chosenChars = chosenChars.concat(upperCasedCharacters)
  }
  if (numberConfirm){
    chosenChars = chosenChars.concat(numericCharacters)
  }
  if (specialConfirm){
    chosenChars = chosenChars.concat(specialCharacters)
  }
  for(let i = 0; i < pwLength; i++){
    var randIndex = Math.floor(Math.random() * chosenChars.length);
  var randElement = chosenChars[randIndex];
  password += randElement;
  }

  var passwordText = document.querySelector("#password");
  passwordText.textContent = password

  

  // make conditional statement to move through confirms
  // add alert if nothing is selected, saying at least one must be picked

  // write for loop for password length that stops based on userChoice length
  // write for loop that pulls random chars from var chars string
    // based on userChoice character types

  passwordText.value = password;

}

function generatePassword(){}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
