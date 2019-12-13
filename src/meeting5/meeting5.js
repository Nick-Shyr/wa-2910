import "./meeting5.scss";

// userName = prompt("What is your name, my friend?", userName);

// if (userName == SECRET_USER_NAME) {
//   alert(`hello ${userName}`);
// } else {
//   alert(`By ${userName}`);
// }

// userName = prompt("What is your name, my friend?");
// console.log(boolean(userName));

// do {
//   userName = prompt("What is your name, my friend?");
//   if (userName == SECRET_USER_NAME) {
//     alert(`hello ${userName}`);
//   }
// } while (boolean(userName) == false);

// let userName = "";
// let userNameTmp;
// const SECRET_USER_NAME = "John Snow";
// do {
//   userName = prompt("What is your name, my friend?");
//   userNameTmp = Boolean(userName);
//   console.log(userNameTmp);
//   if (userName == SECRET_USER_NAME) {
//     alert(`hello ${userName}`);
//   } else if (userName != "") {
//     alert(`By ${userName}`);
//   }
// } while (userNameTmp == false);

// let inputString = prompt("enter your text");
// for (let i = 0; i <= inputString.length; i++) {
//   console.log(inputString[i]);
//   if (inputString[i] == "a") {
//     alert("Find");
//     break;
//   }
//   if (inputString[i] == "e") {
//     alert("Find");
//     break;
//   }
//   if (inputString[i] == "i") {
//     alert("Find");
//     break;
//   }
//   if (inputString[i] == "o") {
//     alert("Find");
//     break;
//   }
//   if (inputString[i] == "y") {
//     alert("Find");
//     break;
//   }
//   if (inputString[i] == "u") {
//     alert("Find");
//     break;
//   }
//   if (i == inputString.length) {
//     alert("Letter not found");
//   }
// }

// const inputString = prompt("Enter your text");
// let nameToUpper = "";

// for (let i = 0; i < inputString.length; i++) {
//   if (i == inputString.length - 1) {
//     nameToUpper += inputString[i].toUpperCase();
//     break;
//   }
//   nameToUpper += inputString[i].toUpperCase() + "-";
// }
// alert(nameToUpper);

// const inputString = prompt("Enter your text");
// let tmpString = "";
// for (let i = 0; i < inputString.length; i++) {
//   tmpString += "*";
// }
// alert(tmpString);

let inputString = prompt("enter your text");
let countLet = 0;
for (let i = 0; i <= inputString.length; i++) {
  console.log(inputString[i]);
  if (inputString[i] == "a") {
    countLet++;
    continue;
  }
  if (inputString[i] == "e") {
    countLet++;
    continue;
  }
  if (inputString[i] == "i") {
    countLet++;
    continue;
  }
  if (inputString[i] == "o") {
    countLet++;
    continue;
  }
  if (inputString[i] == "y") {
    countLet++;
    continue;
  }
  if (inputString[i] == "u") {
    countLet++;
    continue;
  }
}
if (countLet == 0) {
  alert("loud letters not found");
} else {
  alert(`loud letters in word is ${countLet}`);
}

//homework
//"JS для детей"
//глава строки, масивы, задачки глава 3
