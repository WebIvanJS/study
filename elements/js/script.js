'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';

box.style.cssText = 'background-color: blue; width: 495px';
console.dir(hearts);

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('black');

wrapper.prepend(div);


hearts[1].replaceWith(div);
div.innerHTML = '<h1>World</h1>';

div.insertAdjacentHTML('afterbegin' , '<h1>Hello World</h1>');