"use strict";


let number =5;
const lel = 1;
const numberOfFilms = +prompt('Скільки фільмів ви бачили?','');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Останній фільм?', ''),
      b = prompt('На скільки оцінете?', ''),
      c = prompt('Останній фільм?', ''),
      d = prompt('На скільки оцінете?', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;


console.log(personalMovieDb);
13435t