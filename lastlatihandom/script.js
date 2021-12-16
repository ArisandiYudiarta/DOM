const cont = document.querySelector('.container');
const banner = document.querySelector('img.jumbo');
const content = document.querySelectorAll('.content');

cont.addEventListener('click', function(e){
    if(e.target.className == 'content' ){
        banner.src = e.target.src;
        banner.classList.add('fade');
        //menghilangkan kelas setelah beberapa interval
        setTimeout(function(){
            banner.classList.remove('fade')
        }, 500);

        content.forEach(function(c){
            if(c.classList.contains('aktif')){
                c.classList.remove('aktif');
            }

            //replace all class to set name
            // c.className = 'thumb';
        });

        //yg di click pasang class ini
        e.target.classList.add('aktif');
    }
})