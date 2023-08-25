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
  var hasSpecialCharacters = confirm("Would you like to include special characters? (Click OK for 'Yes' or Cancel for 'No') (e.g @ # % () !)");
  var hasNumericCharacters = confirm("Would you like to include numeric characters? (Click OK for 'Yes' or Cancel for 'No')");
  var hasLowercaseCharacters = confirm("Would you like to include lowercase characters? (Click OK for 'Yes' or Cancel for 'No')");
  var hasUppercaseCharacters = confirm("Would you like to include uppercase characters? (Click OK for 'Yes' or Cancel for 'No')");

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

// Defining a function named getRandom that accepts an array arr as a parameter.
function getRandom(arr) {

  // Generating a random floating-point number between 0 (inclusive) and 1 (exclusive) using Math.random(). 
  // This number is then multiplied by the length of the array (arr.length) to map it to a valid index range. 
  // The result is a floating-point index value. The Math.floor() function is used to round this value down 
  // to the nearest integer, ensuring that it's a valid index within the array.
  var randomIndex = Math.floor(Math.random() * arr.length);

  // Returning the element from the input array arr at the randomly generated index randomIndex. 
  // This effectively provides a random element from the array.
  return arr[randomIndex];
}
// Function to generate password with user input
function generatePassword() {

  // Getting Password Options by  calling the getPasswordOptions() function to retrieve 
  // the user's selected password generation options and stores them in the options variable.
  var options = getPasswordOptions();

  if (!options) {
    return ""; // Checking if the user entered invalid options. If options is false, the function returns an empty string, indicating that it couldn't generate a password.
  }

  var allPossibleCharacters = []; // Initialising an empty array to store all possible characters based on the selected options.

  // Concatenating Special Characters 
  // If the user chose to include special characters, 
  // the specialCharacters array is concatenated with the allPossibleCharacters array.
  if (options.hasSpecialCharacters) {
    allPossibleCharacters = allPossibleCharacters.concat(specialCharacters);
  }

  // Concatenating Numeric Characters
  if (options.hasNumericCharacters) {
    allPossibleCharacters = allPossibleCharacters.concat(numericCharacters);
  }
  // Concatenating Lowercase Characters
  if (options.hasLowercaseCharacters) {
    allPossibleCharacters = allPossibleCharacters.concat(lowerCasedCharacters);
  }
  // Concatenating Uppercase Characters:
  if (options.hasUppercaseCharacters) {
    allPossibleCharacters = allPossibleCharacters.concat(upperCasedCharacters);
  }
  // Generating Password and then looping options.length times and in each iteration, 
  // generates a random character using the getRandom() function from the concatenated array of all possible characters. 
  var generatedPassword = "";

  for (var i = 0; i < options.length; i++) {
    var randomCharacter = getRandom(allPossibleCharacters);
    generatedPassword += randomCharacter;
  }

  // After the loop, the function returns the generatedPassword, 
  // which now contains the random password generated based on the user's selected options.
  return generatedPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// This line gets the HTML element with the ID "generate," which is expected to be a button element.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  // This is the function that is called when the "Generate Password" button is clicked. 
  // It calls the generatePassword() function to generate a password and then updates 
  // the value of the passwordText element to display the generated password.
  passwordText.value = password;

  // adding a message that password has been successfully generated
  var successMessage = document.querySelector('#success-message');
  successMessage.textContent = 'Congratulations! Your New Password has been successfully generated!';
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
// This line adds an event listener to the "Generate Password" button.
// It listens for the "click" event and when triggered, it calls the writePassword() function, 
// which generates and displays the password.

