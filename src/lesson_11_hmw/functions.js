//Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и
//max, включая min,max как возможные значения

const minInt = 1;
const maxInt = 10;
const firstFunc = document.querySelector("#func-1");
const secondFunc = document.querySelector("#func-2");
const thirdFunc = document.querySelector("#func-3");

const randomInteger = (min, max) => {
  let randVal = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randVal);
  return randVal;
};

firstFunc.onclick = () => {
  randomInteger(100, 110);
};

// Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.
// Создайте пустой объект user.
// Добавьте свойство name со значением Вася.
// Добавьте свойство surname со значением Петров.
// Поменяйте значение name на Сергей.
// Удалите свойство name из объектa
let user = {
  name: "Vasya",
  surname: "Petrov"
};
user.name = "Sergey";
console;
delete user.name;

// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если
// хоть одно свойство есть.
let objFunc3 = {
  // a: "adsfaf",
  // b: "adfadfadfadf",
  // c: "qqqqqq"
};
let isEmpty = test => {
  let tmpArr = Object.keys(test);
  let tmpArrLenght;
  if (tmpArr.length === 0) {
    tmpArrLenght = true;
  } else {
    tmpArrLenght = false;
  }
  return tmpArrLenght;
};
secondFunc.onclick = () => {
  let result = isEmpty(objFunc3);
  console.log("result of isEmpty function = ", result);
};

// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат. Если объект
// пустой, то результат должен быть 0.
let salaries = {
  John: 400,
  Jack: 20000,
  test: "asdasdasd"
};
let calc = objSalaries => {
  let sum = 0;
  let tmpArr = Object.keys(objSalaries);
  for (let i = 0; i < tmpArr.length; i++) {
    console.log(typeof tmpArr[i]);
    console.log(tmpArr[i]);
    if (typeof tmpArr[i] === "number") {
      sum += tmpArr[i];
    }
  }
  console.log(sum);
  return sum;
};
thirdFunc.onclick = () => {
  calc(salaries);
};
