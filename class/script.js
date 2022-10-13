const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);

if(btns[1].classList.contains('red')){
    console.log('red');
}


btns[0].addEventListener('click', () =>{
    btns[1].classList.add('red');
   
} );