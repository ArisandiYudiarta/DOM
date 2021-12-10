// node.<event> = ''
// Ex : node.onclick = ''

const p3 = document.querySelector('p.p3');

// function ubahWarna(){
//     p3.style.backgroundColor = 'cyan';
// }

p3.onclick = function ubahWarna(){
    p3.style.backgroundColor = 'cyan';
}

// ===================================================================
// node.addEventListener()

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const li = document.createElement('li');
    const textli = document.createTextNode('li Baru!');

    li.appendChild(textli);
    ul.appendChild(li);
})

