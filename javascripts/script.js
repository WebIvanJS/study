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


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
} else {
    console.log('non');
}


let result = '';
const length = 7;

for (let i = 1; i < length; i++) {


    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += "\n";

}
console.log(result);


