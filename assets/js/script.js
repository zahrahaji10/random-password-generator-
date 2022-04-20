// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password

const generatePassword = () => {
  //All your code goes here to generate a password

  // prompt user to enter password lenth
  const passwordLength = prompt(
    "Please enter a number of how many characters you want your password. Ensure a number between 8 and 128."
  );
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
