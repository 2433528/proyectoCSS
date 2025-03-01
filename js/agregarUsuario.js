let nombre=document.querySelector('#nombre');
let apellido=document.querySelector('#lastname');
let correo=document.querySelector('#email');
let fecha=document.querySelector('#fechaNacimiento');
let ciudad=document.querySelector('#pais');
let pais=document.querySelector('#ciudad');
const form=document.querySelector('#enviar');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let usuarios=JSON.parse(localStorage.getItem('usuarios'));
    let ultimo=usuarios.length-1;
    let campos=document.querySelectorAll('input');
    console.log(ultimo);
    
    let objeto={
        id:usuarios[ultimo].id+1,
        name:campos[0].value, 
        lastname:campos[1].value,
        email:campos[2].value,
        fechaNacimiento:campos[3].value,
        ciudadResidencia:campos[4].value,
        paisResidencia:campos[5].value,
        password:campos[6].value,
        repetirPassword:campos[7].value,
    }

    let usuarios2=[...usuarios,objeto];
    localStorage.setItem('usuarios',JSON.stringify(usuarios2))

    campos.forEach((campo)=>{
        if(campo.type!='submit'){
            campo.value=''
        }
    })

    location.href="usuarios.html";

})