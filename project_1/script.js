"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   ganres: [],
//   privat: false,
// };

// const mov1 = prompt("Один из последний просмотренных фыльмов", "");
// const ans1 = prompt("На сколько оцените его", "");
// const mov2 = prompt("Один из последний просмотренных фыльмов", "");
// const ans2 = prompt("На сколько оцените его", "");
// personalMovieDB.movies[mov1] = ans1;
// personalMovieDB.movies[mov2] = ans2;

// console.log(personalMovieDB);

// const hum = 2;
// const fri = -1;

// if (hum && fri) {
//   console.log("est'");
// }
// console.log(hum && fri);

// const hum = 4;
// const fie = 1;

// if (hum >= 3 && fie) {
//   console.log("ok");
// } else console.log("neam");

// const hum = 4;
// const fie = 1;
// const cola = 2;
// const nuh =0;

// console.log(hum&&cola || fie && nuh);

// if (hum&&cola || fie && nuh){
//   console.log("rscnn")
// }

// let res = "";
// let length = 7;
// for (let i = 1; i < length; i++) {
//   //console.log("*")
//   for (let j = 0; j < i; j++) {
//     res += "*";
//   }
//   res += "\n";
// }
// console.log(res);

function firstTask() {
  for (let i = 5; i < 11; i++) {
    console.log(i);
  }
}
firstTask();

function secondTask() {
  for (let i = 20; i > 10; i--) {
    if (i === 13) {
      break;
    }
    console.log(i);
  }
}
secondTask();

function thirdTask() {
  // Пишем решение вот тут
  for (let i = 2; i < 11; i++) {
    if (i % 2 === 0) {
      console.log(i);
    } else continue;
  }
}
thirdTask();
function fourthTask() {
  // Пишем решение вот тут
  let i = 2;
  while (i < 16) {
    i++;
    if (i % 2 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }
}
fourthTask();

function fifthTask() {
  const arrayOfNumbers = [];

  // Пишем решение вот тут
  for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
  }
  console.log(arrayOfNumbers);
  // Не трогаем
  return arrayOfNumbers;
}
fifthTask();
