"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("odin iz", "").trim();
      let b = prompt("otsenka", "").trim();

      if (a != null && b != null && a.length > 0 && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        console.log("film error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count <= 0 || Number.isNaN(personalMovieDB.count)) {
      console.log("Oshibka");
    } else if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
      console.log("Malo");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("classik");
    } else {
      console.log("kinkman");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else personalMovieDB.privat = true;
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимій жанр под номером ${i}?`, "");

      if (genre === null || genre === "") {
        i--;
      } else personalMovieDB.genres[i - 1] = genre;
    }
    personalMovieDB.genres.forEach((item, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${item}`);
    });
  },
};
personalMovieDB.writeYourGenres();
