//DOM Manipulation

// const card = document.querySelector('div.card');
// const del = document.querySelector('div.card .close');

// del.addEventListener('click', function(){
//     card.style.display = 'none';
// })

//DOM Traversal

const x = document.querySelectorAll('.close');

// for(let i = 0; i < x.length; i++){
//     x[i].addEventListener('click', function(e){
//         // e.parentElement.style.display='none';
//         e.parentElement.target.style.display='none';
//     });
// }

x.forEach(function(o){
    o.addEventListener('click', function(e){
        e.target.parentElement.style.display='none';
    });
});
