// Assignment Code
var generatePassword = "";
var finalArray = [];
array = [];
str = "";
var selectPassword = true;

var passwordLength = "";
var choices = {
  lowercase: getRandomLower(),
  uppercase: getRandomUpper(),
  numbers: getRandomNumber(),
  specials: getRandomSpecial(),
};
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSpecial() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

var passwordLength = function () {
  var passLength = prompt(
    'A good password is between 8 - 128 characters. Would you like to "Generate a Password"?'
  );
  if (passLength < 8 || passLength > 128) {
    alert(
      "Please enter a valid number for your password length between 8 and 128 characters."
    );
    return passwordLength();
  }
  if (passLength >= 8 && passLength <= 128) {
    chooseUppercase();
    console.log(passLength);
  }
  if (passLength == false) {
    var confirmSkip = confirm(
      "Are you certain you do not want to use the passwrd generator?"
    );
  }
};

function chooseUppercase() {
  var chooseUppercase = confirm("Would you like to use Uppercase characters?");
  if (chooseUppercase == true) {
    chooseLowercase();

    array.push(getRandomUpper);
    console.log(getRandomUpper());
    console.log(array);
  }
  if (chooseUppercase == false) {
    chooseLowercase();
  }
}

//   chooseLowercase();
// }
function chooseLowercase() {
  var chooseLowercase = confirm("Would you like to use Lowercase characters?");
  if (chooseLowercase == true) {
    chooseNumbers();
    array.push(getRandomLower);

    console.log(array);
  }
  if (chooseLowercase == false) {
    chooseNumbers();
  }
}
// // console.log(finalArray);
// // chooseLowercase();

function chooseNumbers() {
  var chooseNumbers = confirm("Would you like to use Numeric characters?");
  if (chooseNumbers == true) {
    chooseSpecial();
    array.push(getRandomNumber);

    console.log(array);
  }
  if (chooseNumbers == false) {
    chooseSpecial();
  }
}
function chooseSpecial() {
  var chooseSpecial = confirm("Would you like to use Special characters?");
  if (chooseSpecial == true) {
    array.push(getRandomSpecial);
  }
  if (chooseSpecial == false) {
    console.log(array);
  }
}

// // Write password to the #password input
function writePassword(array) {
  alert("You pressed the button");

  console.log(writePassword);

  //   //   var password = generatePassword();
  //   //   var passwordText = document.querySelector("#password");

  //   //   passwordText.value = password;
}

document.getElementById("generate").addEventListener("click", () => {
  document.getElementById("password").innerHTML = finalArray;
  document.querySelector("#password").style.backgroundColor = "#f4f4f4";
  passwordLength();
});

console.log(finalArray);
//   passwordTextEl = shuffle(finalArray).join(" ");
//   console.log(typeof passwordTextEl);
function shuffle(Array) {
  var passwordIndex = Array.length,
    passwordValue,
    randomIndex;
  while (0 !== passwordIndex) {
    randomIndex = Math.floor(Math.random() * passwordIndex);
    passwordIndex -= 1;

    passwordValue = array[passwordIndex];
    array[passwordIndex] = array[randomIndex];
    array[randomIndex] = passwordValue;
  }
}
// var passwordTextEl = finalArray.join();
// // // Assignment Code
// var generateBtn = document.querySelector("#generate");
// // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// var confirmLength = finalArray.join;
// // console.log(confirmLength);
