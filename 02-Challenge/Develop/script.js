// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  var rand = Math.random()
  return Math.floor(Math.random() * (max - min) + min)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {



  while (true) {

    var userInput = window.prompt("How long do you want your password be ? ")

    // user exited the prompt
    if (userInput === null) {
      return
    }


    var passwordLength = parseInt(userInput)


    if (isNaN(passwordLength)) {
      window.alert("That's not a number !")
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid password length. Length should be between 8 and 128 characters.")
    } else {
      break
    }

  }

  var UserWantsNumbers = window.confirm("Would you like to include Numbers in your password?")
  var UserWantsSymbol = window.confirm("Would you like to include Symbol in your password?")
  var UserWantsLowercase = window.confirm("Would you like to include Lowercase in your password?")
  var UserWantsUppercase = window.confirm("Would you like to include Uppercase in your password?")

  var NumberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var SymbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var Lowercaselist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var UppercaseList = []

  var optionscart = []

  for (var i = 0; i < Lowercaselist.length; i++) {
    UppercaseList[i] = Lowercaselist[i].toUpperCase()
  }
  if (UserWantsNumbers === true) {
    optionscart.push(NumberList)
  }

  if (UserWantsSymbol === true) {
    optionscart.push(SymbolList)
  }

  if (UserWantsLowercase === true) {
    optionscart.push(Lowercaselist)
  }

  if (UserWantsUppercase === true) {
    optionscart.push(UppercaseList)
  }

  if (optionscart.length === 0) {
    optionscart.push(Lowercaselist)
  }

  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionscart)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }

  return generatePassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) return

  if (password) {
    passwordText.value = password;
  }

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
