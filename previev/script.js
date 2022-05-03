
function myFirstApp (name, age) {
    alert(`Прівєт, мене звати ${name} і це моя перша функція`);


    function showSkils(q){
        let skills = ['html', 'css', 'js'];
        let i=0;
        while (i < skills.length ){
            console.log(skills[i]);
            i++;
        }
        
    }
    showSkils(3);

    function checkAge(){
        if( age < '18') {
            console.log(`Ще рано! Тільки ${age} ркоів`);
        } else {
            console.log('Вже норм');
        }

    }
    checkAge();
    function calcPow(num) {
        return num * num;

    }
    console.log(calcPow(4));



}

myFirstApp('Ivan','14');

const df = 4;
let storeName = 'Lidl';
const storeDescription = {
    budget: 10000,
    employees: ['Ivan', 'Alex', 'John'],
    products: {
        pizza: 10,
        salame: 15
    },
    open: true
};

alert('Hello');

const result = confirm ('Are you hear?');
 confirm ('Are you hear?');

