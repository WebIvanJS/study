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
console.log(products.join(';'));




//arr.pop();
arr.push(15);

console.log(arr);