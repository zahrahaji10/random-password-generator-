// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password // All your code goes here to generate a password
const generatePassword = () => {
  //declare all password criteria 

 const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 const uppercase =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 const numeric = ["0","1","2","3","4","5","6","7","8","9"];
 const specialCharacters = [" ","!","\",""","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

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
