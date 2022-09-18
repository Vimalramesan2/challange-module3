// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {





  var userInput = window.prompt("How long do you want your password be ? ")

  // user exited the prompt
  if (userInput === null) {
    return
  }


  var passwordLength = parseInt(userInput)


  if (isNaN(passwordLength)) {
    window.alert("That's not a number !")
    return
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length. Length should be between 8 and 128 characters.")
    return
  }



  var UserWantsNumbers = window.confirm("Would you like to include Numbers in your password?")
  var UserWantsSymbol = window.confirm("Would you like to include Symbol in your password?")
  var UserWantsLowercase = window.confirm("Would you like to include Lowercase in your password?")
  var UserWantsUppercase = window.confirm("Would you like to include Uppercase in your password?")

  var NumberList = "0123456789"

  var SymbolList = "!@#$%^&*"

  var Lowercaselist = "abcdefghijklmnopqrstuvwxyz"
  var UppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var optionscart = ''




  if (UserWantsNumbers === true) {
    optionscart += NumberList
  }

  if (UserWantsSymbol === true) {
    optionscart += SymbolList
  }

  if (UserWantsLowercase === true) {
    optionscart += Lowercaselist
  }

  if (UserWantsUppercase === true) {
    optionscart += UppercaseList
  }

  if (optionscart.length === 0) {
    optionscart += Lowercaselist
  }

  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * (optionscart.length - 0) + 0)
    var randomChar = optionscart[randomIndex]

    generatePassword += randomChar
  }

  return generatePassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
