// Assignment Code
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

   function generatePassword() {
    var length = 12
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        returnValue = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        returnValue += charset.charAt(Math.floor(Math.random() * n));
    }
    return returnValue;
}
}


generateBtn.addEventListener("click", writePassword);

var passwordTypeLong = prompt("What is your desired password length? ");
var passwordType = prompt("What is your desired character type? ");
var passwordType = prompt("What are the characters you do not want present? ");