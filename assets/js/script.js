// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password
const generatePassword = () => {
  // calling the get password length function
  const passwordLength = getPasswordLength();

  // prompt user to get the password length
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

  // declaring password criteria
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numeric = "0123456789";
  const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let userPasswordConfirms;

  //prompting user to select the password criteria's
  const passwordCriteria = () => {
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
      const finalRandomPasswordArray = [];
      const passwordCriteriaArray = [
        hasUppercase,
        hasLowercase,
        hasnumeric,
        hasSpecialCharacter,
      ];

      // checking the confirmed criteria of the array
      const checkCriteria = passwordCriteriaArray.find(
        (eachItemsWithinArray) => eachItemsWithinArray === true
      );
      // pushing confirmed criteria's into final array to generate random password
      if (checkCriteria) {
        if (passwordCriteriaArray[0]) finalRandomPasswordArray.push(uppercase);

        if (passwordCriteriaArray[1]) finalRandomPasswordArray.push(lowercase);

        if (passwordCriteriaArray[2]) finalRandomPasswordArray.push(numeric);

        if (passwordCriteriaArray[3])
          finalRandomPasswordArray.push(specialCharacters);
      } else {
        alert("Please select at least one criteria for your password");
        passwordCriteria();
      }

      // returning function with final password array
      return finalRandomPasswordArray;
    };

    // calling create random password function
    userPasswordConfirms = createRandomPassword();
  };

  //calling get password criteria function
  passwordCriteria();

  let password = "";
  // loop for selecting random category from user password confirms
  for (let i = 0; i < passwordLength; i++) {
    //creating a index to get a random category
    const randomCategoryIndex = Math.floor(
      Math.random() * userPasswordConfirms.length
    );
    //using the index to get a string of characters from confirmed user password confirms array
    const confirmedPasswordCriteriaArray =
      userPasswordConfirms[randomCategoryIndex];
    //splitting each individual string items into an array
    const categoryArray = confirmedPasswordCriteriaArray.split("");
    //using a index to randomly select characters from an array
    const randomIndex = Math.floor(Math.random() * categoryArray.length);
    //joining the separate randomly selected characters array into a password variable
    password += categoryArray[randomIndex];
  }
  // returning the string of selected characters array to display as password
  return password;
};

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
