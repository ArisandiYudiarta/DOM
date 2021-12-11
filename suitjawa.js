function getCompResult(){
    const comp = Math.random();
    if(comp < 0.34 ) return 'batu';
    if(comp >= 0.34 && comp < 0.67) return 'gunting';
    return 'kertas';
}

function result(user,comp){
    if(user == comp) return 'SERI!';
    //artinya "jika (user memilih batu) return value (jika comp memilih gunting) ? correct = menang ! wrong = kalah ;"
    if(user == 'batu') return (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
    if(user == 'gunting') return (comp == 'kertas') ? 'MENANG!' : 'KALAH!';
    if(user == 'kertas') return (comp == 'batu') ? 'MENANG!' : 'KALAH!';
}


const batu = document.querySelector('.batu');
const gunting = document.querySelector('.gunting');
const kertas = document.querySelector('.kertas');
const showResult = document.querySelector('.info');
const compResult = document.querySelector('.optcom');



batu.addEventListener('click', function(){
    const compOption = getCompResult();
    const userOption = batu.className;
    const hasil = result(userOption, compOption);
    
    compResult.innerHTML ='<h1>'+ compOption +'</h1>';
    showResult.innerHTML ='<h3>'+ hasil +'</h3>';
});

gunting.addEventListener('click', function(){
    const compOption = getCompResult();
    const userOption = gunting.className;
    const hasil = result(userOption, compOption);
    
    compResult.innerHTML ='<h1>'+ compOption +'</h1>';
    showResult.innerHTML ='<h3>'+ hasil +'</h3>';
});

kertas.addEventListener('click', function(){
    const compOption = getCompResult();
    const userOption = kertas.className;
    const hasil = result(userOption, compOption);
    
    compResult.innerHTML ='<h1>'+ compOption +'</h1>';
    showResult.innerHTML ='<h3>'+ hasil +'</h3>';
});

