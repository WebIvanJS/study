" use strict";

function first () {
    setTimeout (function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function lernJS(lang, callback) {
    console.log(`Я вчу: ${lang}`)
    callback();
}
function done(){
    console.log('Я пройшов цей урок');
}


lernJS('JavaScript', done );

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};
options.makeTest();


const {border, bg} = options.colors;
console.log(border);



console.log(Object.keys(options).length);

for(let key in options) {
    if(typeof(options[key]) === 'object'){
        for(let i in options[key]) {
            console.log(`Свойства ${i} mає значення ${options[key][i]}  `)
        }

    } else {
    console.log(`Свойства ${key} mає значення ${options[key]}  `)
    }
}