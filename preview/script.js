const btn = document.querySelector('button');

btn.onclick = function () {
    alert('click');
};


// btn.onclick = function () {
//     alert('second click');
// };


btn.addEventListener('click', (e) => {
   e.target.remove();
});



 const del = (e) => {
    e.target.remove();
 };

const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();
});


function factorial(n) {
   return n ? n * factorial(n - 1) : 1;
  
}

console.log(factorial(5));