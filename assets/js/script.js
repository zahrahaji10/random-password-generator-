// Assignment Code
const generateBtn = document.querySelector("#generate");

// declaring password criteria
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let userPasswordConfirms;

// prompt user password length input and validate
const getPasswordLength = () => {
  const passwordLength = prompt(
    "How many characters do you want your password to have. Please enter between 8 and 128 characters"
  );
  const passLengthNum = parseInt(passwordLength, 10);
  //validate user password length input
  if (passLengthNum >= 8 && passLengthNum <= 128) {
    // return the password length
    return passLengthNum;
  } else {
    // alert user to re-try input a correct number
    alert("Please enter a valid number");
    return;
  }
};

//prompting user to select the password criteria's
function passwordCriteria() {
  const finalRandomPasswordArray = [];
  // declaring variables for all criteria
  const hasUppercase = confirm(
    "Would you like to have uppercase characters in you password"
  );
  const hasLowercase = confirm(
    "Would you like to have lowercase characters in you password"
  );
  const hasNumeric = confirm(
    "Would you like to have numeric characters in you password"
  );
  const hasSpecialCharacter = confirm(
    "Would you like to have uppercase characters in you password"
  );
  // pushing each criteria arrays the user selects to the final array
  if (hasLowercase || hasUppercase || hasSpecialCharacter || hasNumeric) {
    if (hasUppercase) {
      // push if user has uppercase characters confirmed
      finalRandomPasswordArray.push(uppercase);
    }
    // push if user has lowercase character confirmed
    if (hasLowercase) {
      finalRandomPasswordArray.push(lowercase);
    }
    // push if user has has numeric character confirmed
    if (hasNumeric) {
      finalRandomPasswordArray.push(numeric);
    }
    // push if user has special characters confirmed
    if (hasSpecialCharacter) {
      finalRandomPasswordArray.push(specialCharacters);
    }
    // returning function with final password array
    return finalRandomPasswordArray;
  } else {
    // start over if they don't select anything
    alert("Please select at least one criteria for your password");
    passwordCriteria();
  }
}

// main function to generate the random password
const generatePassword = () => {
  // calling the get password length function
  const passwordLength = getPasswordLength();

  if (passwordLength) {
    //calling get password criteria function
    const passwordRandomArray = passwordCriteria();
    let password = "";
    // loop for selecting random category from user password confirms
    for (let i = 0; i < passwordLength; i++) {
      //creating a index to get a random category
      const randomCategoryIndex = Math.floor(
        Math.random() * passwordRandomArray.length
      );
      //using the index to get a string of characters from confirmed user password confirms array
      const confirmedPasswordCriteriaArray =
        passwordRandomArray[randomCategoryIndex];
      //splitting each individual string items into an array
      const categoryArray = confirmedPasswordCriteriaArray.split("");
      //using a index to randomly select characters from an array
      const randomIndex = Math.floor(Math.random() * categoryArray.length);
      //joining the separate randomly selected characters array into a password variable
      password += categoryArray[randomIndex];
    }
    // returning the generated password string
    return password;
  } else {
    return;
  }
};

//Write password to the #password input
const writePassword = () => {
  //(2nd-js then goes to execute this function generate password and reads the code)
  const password = generatePassword() || "";
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button (this is the first step in generating a password)
generateBtn.addEventListener("click", writePassword);
