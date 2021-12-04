// DOM Selection Methods

// ADD "document." FOR EVERY METHOD 

// //=======================================================================
// // 1 - getElementById(); -> value returned = 1 element

// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'aliceblue';
// judul.innerHTML = 'Arisandi Yudiarta'; 

// //=======================================================================
// // 2 - getElementsByTagName(); -> value returned = HTML Collection (as an array)

// const p = document.getElementsByTagName('p');

// // modifying the elements

// p[0].style.color = 'blue';
// p[1].style.color = 'blue';
// p[2].style.color = 'blue';

// // OR u can do this instead (looping)

// for (let i = 0; i < p.length; i++) {
//     p[i].style.color = 'green';
// }

// // for selecting by tag name BUT u want it to be an elemet NOT a HTML collection 

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// //=======================================================================
// // 3 - getElementByClassName(); -> value returned = HTML Collection

// const p1 = document.getElementsByClassName('p1');

// // how to modify is as the same as number 2

// p1[0].innerHTML = 'diubah dari js DOM';

// //=======================================================================
// // 4 - querySelector(); -> value returned = 1 element

// const p4 = document.querySelector('#b p');

// p4.style.backgroundColor = 'aliceblue';

// //selecting the second child of an unordered list that is inside of a tag section with an id of b
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'gray';


// //=======================================================================
// // 5 - querySelectorAll(); -> value returned = NodeList
// const p = document.querySelectorAll('p');

// // how to modify
// // p[2].style.backgroundColor = "cyan";

// // OR do it with loop

// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'aliceblue';
// }

// //=======================================================================
// HOW TO CHANGE NODE ROOT
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'purple';

//OR u can do this
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'purple';