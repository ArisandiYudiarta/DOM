// //DOM Manipulation

// // const card = document.querySelector('div.card');
// // const del = document.querySelector('div.card .close');

// // del.addEventListener('click', function(){
// //     card.style.display = 'none';
// // })

// //DOM Traversal

// const x = document.querySelectorAll('.close');

// // for(let i = 0; i < x.length; i++){
// //     x[i].addEventListener('click', function(e){
// //         // e.parentElement.style.display='none';
// //         e.parentElement.target.style.display='none';
// //     });
// // }

// //Better solution

// x.forEach(function(o){
//     o.addEventListener('click', function(e){
//         e.target.parentElement.style.display='none';
//         // METHOD PREVENT DEFAULT
//         e.preventDefault();
//         //STOP EVENT BUBBLING
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok');
//     });
// });


// EVENT BUBBLING PRACTICE

const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    // console.log(e.target);
    if( e.target.className == 'close' ){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }  
});