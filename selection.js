// DOM Selection Methods

// ADD "document." FOR EVERY METHOD 

// 1 - getElementById(); -> value returned = element

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'aliceblue';
judul.innerHTML = 'Arisandi Yudiarta'; 

// 2 - getElementsByTagName(); -> value returned = HTML Collection (as an array)

const p = document.getElementsByTagName('p');

// modifying the elements

// p[0].style.color = 'blue';
// p[1].style.color = 'blue';
// p[2].style.color = 'blue';

// OR u can do this instead (looping)

for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'green';
}

// for selecting by tag name BUT u want it to be an elemet NOT a HTML collection 

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// 3 - getElementByClassName(); -> value returned = HTML Collection

const p1 = document.getElementsByClassName('p1');

// how to modify is as the same as number 2

p1[0].innerHTML = 'diubah dari js DOM';



