// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password

const generatePassword = () => {
  //(3rd-js then goes to execute this function generate password and reads the code)
  //All your code goes here to generate a password

  // prompt user
  function getPasswordLength() {
    const passwordLength = prompt(
      "How many characters do you want your password to have. Please enter between 8 and 128 characters"
    );
    const convertPasswordLength = parseInt(passwordLength, 10);
    if (convertPasswordLength >= 8 && convertPasswordLength <= 128) {
      return convertPasswordLength;
    } else {
      alert("Please enter a valid number");
      getPasswordLength();
    }
  }

  // calling the password length function
  const passwordLength = getPasswordLength();

  // declaring variables for all criteria
  const hasUppercase = confirm(
    "Would you like to have uppercase characters in you password"
  );
  const hasLowercase = confirm(
    "Would you like to have lowercase characters in you password"
  );
  const hasnumeric = confirm(
    "Would you like to have numeric characters in you password"
  );
  const hasSpecialCharacter = confirm(
    "Would you like to have uppercase characters in you password"
  );

  // create a random password function
  const createRandomPassword = () => {
    let passwordCriteriaArray = [
      hasUppercase,
      hasLowercase,
      hasnumeric,
      hasSpecialCharacter,
    ];
    let finalRandomPasswordArray = [];

    if (passwordCriteriaArray[0]) {
      finalRandomPasswordArray.push(uppercase);
    }
  };
  createRandomPassword();
  //declare all password criteria

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numeric = "0123456789";
  const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
};

//   const getPasswordLength = prompt(
//     "How many characters do you want your password to have. Please enter between 8 and 128 characters"
//   );
//   // convert the string into the correct input value of integer
//   let convertPasswordLength;
//   /*Password needs to be between a number greater than or equal to 8 and less than or equal to 128
//   check password length */
//  if (parseInt(getPasswordLength, 10) >=8 && parseInt(getPasswordLength, 10) <=128){
//     return alert("")
//  } else{
//     return prompt("Please enter a valid number")
//  };
// };

// declare the password criteria

//Write password to the #password input
const writePassword = () => {
  //(2nd-js then goes to execute this function generate password and reads the code)
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button (this is the first step in generating a password)
generateBtn.addEventListener("click", writePassword);
