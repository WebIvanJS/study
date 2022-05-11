"use strict";


const arr = [81, 22, 13, 4, 96, 19];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}


arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} In array ${arr}`);
});

const str = prompt("", "");
const products = str.split(", ");
console.log(products.join(' ; '));




//arr.pop();
arr.push(15);

console.log(arr);





const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}
console.log(showProgrammingLangs(personalPlanPeter));



const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

    let arf = ['Семья состоит из:'];
    if (arr.length == 0) {  

    for (let key in arr) {
        arf += ` ${arr[key]}`
    }
     } else {
        arf = "Сім'я порожня!";
    }
    return arf
}
console.log(showFamily(family));
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {

  
    for (key in arr) {

        
        console.log(`${arr[key]}`.toLowerCase());
      }
}

standardizeStrings(favoriteCities);


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });

    return str;
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);



const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) === 'string'){
    let newString = str.split("");
    let reverseArray = newString.reverse();
    var joinArray = reverseArray.join("");
    console.log(typeof(joinArray));
    return joinArray;

} else {
    return "Error"
}


}
console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

}





const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')