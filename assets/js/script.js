// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password

const generatePassword = () => {
  //(3rd-js then goes to execute this function generate password and reads the code)
  //All your code goes here to generate a password

  // prompt user to enter password lenth
  const passwordLength = prompt(
    "How many characters do you want your password to have. Please enter between 8 and 128 characters"
  );

  // convert the string into the correct input value of integer
  const convertPasswordLength = parseInt(passwordLength, 10);
  console.log(convertPasswordLength);
};

// declare the password criteria

// Write password to the #password input
const writePassword = () => {
  //(2nd-js then goes to execute this function generate password and reads the code)
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button (this is the first step in generating a password)
generateBtn.addEventListener("click", writePassword);
