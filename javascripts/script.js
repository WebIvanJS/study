"use strict";



const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

    }
}

writeYourGenres();


// Место для первой задачи



function sayHello(a) {
    let res = 'Привет, ' + a + '!';
    return res;

}

sayHello('aynjy');


// Место для второй задачи
function returnNeighboringNumbers(a) {
    const s = [];
    let j = -1;
    for (let i = 0; i < 3; i++) {
        let res = a + j;
        s[i] = res;
        j++;
    }

    return s;

}
returnNeighboringNumbers(8);


// Место для третьей задачи
function getMathResult(num, times) {
    if (typeof (times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);
console.log(getMathResult(10, 5));


function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof (times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);


function calculateVolumeAndArea(a) {
    if(Math.sign(a) != -1 && a != 0 && Number.isInteger(a) ) {
        let vol = a * a * a
        console.log(vol);
        console.log('ok');
    } else {
        console.log('Error!');
    }

}
calculateVolumeAndArea(5);


function numberOfSeat (seatNumber) {
    if( seatNumber !=0 && Number.isInteger(seatNumber) && seatNumber <= 36 ) {
        console.log('ok');
        for(let i = 4; i <= 36; i= i + 4 ) {
            if (seatNumber <= i) {
                return Math.ceil(i/4);
            }
        }

    }



}

console.log(numberOfSeat (25));

function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

console.log(getCoupeNumber(3));


function getTimeFromMinutes(n) {
    let hour = Math.floor(n / 60);
    let min = n - hour * 60;

    if(hour > 0 ) {
        console.log(`Це ${hour} години і ${min} хвилин! `);



    }


    console.log(hour);
    console.log(min);

}
getTimeFromMinutes(500) 



let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log( arr );

let myarray=[1, 5, 6.6, 41]
myarray.sort(function(a,b){ 
  return a - b
}) 


console.log( myarray[myarray.length - 1], myarray );


function fib(num) {


    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {

            result += `${first} `;
        

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(7));




