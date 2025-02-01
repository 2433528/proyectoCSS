let usuarios=JSON.parse(localStorage.getItem('usuarios'));
let publicaciones=JSON.parse(localStorage.getItem('publicaciones'));

let card1=document.querySelector('#card1');
let card2=document.querySelector('#card2');
let card3=document.querySelector('#card3');
let card4=document.querySelector('#card4');


document.addEventListener('DOMContentLoaded',()=>{
    if(usuarios){
        card1.textContent=usuarios.length;
    }

    if(publicaciones){
        card2.textContent=publicaciones.length;
    }
})
