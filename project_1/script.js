"use strict";

const numbersOfFilms = +prompt("Сколько?", "");

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

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

if (numbersOfFilms <= 0 || Number.isNaN(numbersOfFilms)) {
  console.log("Oshibka");
} else if (numbersOfFilms > 0 && numbersOfFilms < 10) {
  console.log("Malo");
} else if (numbersOfFilms >= 10 && numbersOfFilms <= 30) {
  console.log("classik");
} else {
  console.log("kinkman");
}

console.log(personalMovieDB);
