/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
const reklama = document.querySelectorAll(".promo__adv img");
const bg = document.querySelector(".promo__bg");
const genre = document.querySelector(".promo__genre");
const ul = document.querySelector(".promo__interactive-list");

//Удалить рекламу
reklama.forEach((item) => {
  item.remove();
});
//изменить жанр
genre.textContent = "драма";

//изменить фон
bg.style.backgroundImage = "url('/project/img/bg.jpg')";

//изменить лист

ul.innerHTML = "";

// сщртировка фильмов
movieDB.movies.sort();
movieDB.movies.forEach((item, index) => {
  ul.innerHTML += `<li class="promo__interactive-item">${index + 1} ${item}
                    <div class="delete"></div>
                    </li>
                `;
});
