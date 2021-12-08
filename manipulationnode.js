//DOM MANIPULATION NODE

// Menambah tag+isi paragraf baru di bagian section#a

// buat elemen baru
const pBaru = document.createElement('p');
let textP = document.createTextNode('New Paragraph');

// menyimpan tulisan kedalam paragraf
pBaru.appendChild(textP);

//menyimkan pBaru diakhir SectionA

// menggunakan node.appendChild()
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// =============================================================

// menggunakan node.insertBefore(<node yang mau ditambah>,<sebelum elemen apa mau diisi>)

//memasukkan sebelum li ke-2 didalam ul 

//buat elemen + text
const addLi = document.createElement('li');
let textLi = document.createTextNode('New List');

// masukan teks ke elemen
addLi.appendChild(textLi);

// parent element
const ul = document.querySelector('section#b ul');
// elemen berikutnya
const li = ul.querySelector('li:nth-child(2)');

//memasukan elemen baru

ul.insertBefore(addLi, li);


// ===================================================================

// parentNode.removeChild()
// menghapus link setelah element p#p1

const alink = document.getElementsByTagName('a')[0];
// "sectionA" diambil dari atas di bagian appendChild()
sectionA.removeChild(alink);


// ====================================================================

// parentNode.replaceChild()

// mereplace tag <p> di section#b

const sectB = document.getElementById('b')
const p4 = sectB.querySelector('p');

const h3 = document.createElement('h3');
const isiH3 = document.createTextNode('Hasil Replace');

h3.appendChild(isiH3);

sectB.replaceChild(h3, p4);


