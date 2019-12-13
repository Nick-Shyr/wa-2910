let name = prompt("Привіт, друже! Як твоє ім'я?");

if (name != null) {
  namePlayer.textContent = "Привіт " + name;
} else {
  namePlayer.textContent = "Бувай, заходьте ще =)";
}

const words = ["програмування", "мавпа", "вебакадемія", "піцца", "помилка"];
var word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
let wrongAnswers = 3;

while (remainingLetters > 0 && wrongAnswers > 0) {
  alert(answerArray.join(" "));
  let guess = prompt("Введіть літеру або Cancel для виходу");
  guess = guess.toLowerCase();
  let letterMatch = false;

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Будь ласочка, введіть лише одну літеру");
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        if (answerArray[i] === "_") {
          answerArray[i] = guess;
          remainingLetters--;
          letterMatch = true;
        } else if (answerArray[i] === guess) {
          alert("А ця літера вже відгадана!");
          break;
        }
      }
    }
    if (!letterMatch) {
      --wrongAnswers;
      if (wrongAnswers == 0) {
        alert("На жаль, всі спроби скінчились :(");
      } else {
        alert("Упс... Залишилось лише декілька спроб: " + wrongAnswers);
      }
    }
  }
  console.log("guess", guess);
  console.log("remainingLetters", remainingLetters);
  console.log("letterMatch", letterMatch);
  console.log("wrongAnswers", wrongAnswers);
}

if (wrongAnswers == 0) {
  answer.textContent = "Ех, не вгадав! А слово то було " + word.toUpperCase();
} else {
  alert(answerArray.join(" "));
  answer.textContent = "Круто, вгадав! Слово " + word.toUpperCase();
}
