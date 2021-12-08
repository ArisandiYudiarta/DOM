//MANIPULASI ELEMEN

// 1 - getelementbyid

// const judul = document.getElementById('judul');
// judul.innerHTML = 'Arisandi Yudiarta'

// 2 - queryselector

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>Arisandi YO</p></div>'

// 3 - ubah style

// const judul = document.querySelector('#judul');
// judul.style.color = 'cyan';
// judul.style.backgroundColor = 'gray';

// 4 - ubah attribute (cek di console, inspect elemetnya)

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'Arisandi');

// // select tag "a" yang ada didalam tag section yang memiliki id "a"
// const a = document.querySelector('section#a a');
// // copas salah satu syntax dibawah ke console web

// // mendeklarasi Attribute
// a.setAttribute('id', 'link');
// // mendapatkan value Attribute
// a.getAttribute('link');
// // menghapus Attribute
// a.removeAttribute('href');

//5 - memanipulasi class

const p2 = document.querySelector('.p2');

// // menambah kelas
// p2.classList.add('label');

// // menghapus kelas
// p2.classList.remove('label');

// // toggle class(cek apakah elemen sudah punya class tersebut, jika punya maka hapus. Jika tidak, maka tambah kelas tersebut);
// // script ini nanti bisa disimpan dalam sebuah tombol (y kno wat dat means)

// p2.classList.toggle('label');

// mengetahui nama kelas pada sebuah element
p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');

// p2.classList.item(2); // output kelas ke-2 (bukan kek array)

// // mengecek adakah kelas yang namanya ...

// p2.classList.contains('tiga');

// mereplace kelas
// p2.classList.replace(value yg mau di replace, value yang mereplace);
p2.classList.replace('tiga', 'empat');