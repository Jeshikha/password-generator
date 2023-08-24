// Array of special characters to be included in password
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
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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
  'z'
];

// Array of uppercase characters to be included in password
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
  'Z'
];

// Function to prompt user for password options to get password criteria from user

// Defining a function named getPasswordOptions
function getPasswordOptions() {
  // Prompting the user to enter the desired password length and stores it in the length variable 
  // after converting it to an integer using parseInt()
  var length = parseInt(prompt("Enter the desired password length (between 8 and 128):"));

  // Checking if the entered password length is not a valid number, or if it's less than 8 or greater than 128. 
  // If any of these conditions are met, an alert is shown, and the function returns early.
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length.");
    return;
  }
  // Gathering Character Type Preferences by using the confirm() function to interact with the user 
  // and gather preferences for including special, numeric, lowercase, and uppercase characters in the password.
  var hasSpecialCharacters = confirm("Would you like to include special characters?");
  var hasNumericCharacters = confirm("Would you like to include numeric characters?");
  var hasLowercaseCharacters = confirm("Would you like to include lowercase characters?");
  var hasUppercaseCharacters = confirm("Would you like to include uppercase characters?");

  // Validating Character Type Selection by checking if none of the character types have been selected. 
  // If none are selected, an alert is shown, and the function returns early.
  if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowercaseCharacters && !hasUppercaseCharacters) {
    alert("At least one character type should be selected.");
    return;
  }
  // Returning Password Options the reason why it is key to contruct and return an object containing the gathered options: 
  // password length and the selected character types.
  return {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowercaseCharacters: hasLowercaseCharacters,
    hasUppercaseCharacters: hasUppercaseCharacters
  };
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);