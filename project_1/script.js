"use strict";

let numbersOfFilms;
//let top3Genres = [];
function start() {
  while (
    numbersOfFilms == "" ||
    numbersOfFilms == null ||
    isNaN(numbersOfFilms)
  ) {
    numbersOfFilms = +prompt("Сколько фильмов?", "");
  }
}
start();

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("odin iz", "");
    let b = prompt("otsenka", "");

    if (a != null && b != null && a.length > 0 && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      console.log("film error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (numbersOfFilms <= 0 || Number.isNaN(numbersOfFilms)) {
    console.log("Oshibka");
  } else if (numbersOfFilms > 0 && numbersOfFilms < 10) {
    console.log("Malo");
  } else if (numbersOfFilms >= 10 && numbersOfFilms <= 30) {
    console.log("classik");
  } else {
    console.log("kinkman");
  }
}
detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимій жанр под номером ${i}?`,
      ""
    );
  }
}
writeYourGenres();
showMyDB();
//console.log(personalMovieDB);
