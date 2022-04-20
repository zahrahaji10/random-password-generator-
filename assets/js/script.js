// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password // All your code goes here to generate a password
const generatePassword = () => {
  /* declare all password criteria 
 lowercase "abcdefghijklmnopqrstuvwxyz"
 uppercase "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 numeric "0123456789"
 special characters " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"

   *prompt user to enter password length
   */
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
