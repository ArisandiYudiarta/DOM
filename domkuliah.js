//anonymous function
document.getElementById('barang').addEventListener('change', function (event) {
    
    // initializing selection
    var barang = event.target.value;
    var lastItem = event.target.parentElement;
    var newItem = document.createElement('li');
    var button = document.createElement('button');

    //value dalam button
    button.innerHTML = 'x';

    button.addEventListener('click', function(event){
        if (confirm('r u sure?')) {
            console.log(event.target.parentElement.remove());
        }
    });

    //menyisipkan document
    newItem.appendChild(button);
    newItem.appendChild(document.createTextNode(' ' + barang))

    // newItem.innerHTML = barang;
    lastItem.before(newItem);
    
    event.target.value = '';

});

var reset = document.getElementById('reset');
reset.addEventListener('click', function(event){

    let items = document.querySelectorAll('li');
    // let items = event.target.previousElementSibling.children;
    var lastItem = event.target.previousElementSibling.lastElementChild;

    Array.from(items).forEach(item => {
        if(item != lastItem) item.remove();
    })

    console.log(Array.from(event.target.previousElementSibling.lastElement));
});