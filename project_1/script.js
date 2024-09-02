"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  ganres: [],
  privat: false,
};

const mov1 = prompt("Один из последний просмотренных фыльмов", "");
const ans1 = prompt("На сколько оцените его", "");
const mov2 = prompt("Один из последний просмотренных фыльмов", "");
const ans2 = prompt("На сколько оцените его", "");
personalMovieDB.movies[mov1] = ans1;
personalMovieDB.movies[mov2] = ans2;

console.log(personalMovieDB);
