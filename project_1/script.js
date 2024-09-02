"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  ganres: [],
  privat: false,
};

const movieOne = {
  name: prompt("Один из последний просмотренных фыльмов", ""),
  rating: prompt("На сколько оцените его", ""),
};
const movieTwo = {
  name: prompt("Один из последний просмотренных фыльмов", ""),
  rating: prompt("На сколько оцените его", ""),
};
personalMovieDB.movies.first = movieOne;
personalMovieDB.movies.second = movieTwo;

console.log(personalMovieDB);
