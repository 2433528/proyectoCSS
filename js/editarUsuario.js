let usuario=JSON.parse(localStorage.getItem('user'))
 console.log(usuario)

 let nombre=document.querySelector('#nombre');
 let apellido=document.querySelector('#lastname');
 let correo=document.querySelector('#email');
 let fecha=document.querySelector('#fechaNacimiento');
 let ciudad=document.querySelector('#pais');
 let pais=document.querySelector('#ciudad');
 let password=document.querySelector('#password');
 let repeatpassword=document.querySelector('#repeatpassword');
 const form=document.querySelector('#enviar');
 let id=usuario[0].id;
 let passwordUser=usuario[0].password;
 console.log(id)

if (usuario){
    const {name,lastname,email,fechaNacimiento,ciudadResidencia,paisResidencia}=usuario[0];
          
    nombre.placeholder=name;    
    apellido.placeholder=lastname;    
    correo.placeholder=email;
    fecha.placeholder=fechaNacimiento;
    pais.placeholder=paisResidencia;
    ciudad.placeholder=ciudadResidencia;   
    

}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let campos=document.querySelectorAll('input');
    console.log(campos);
    campos.forEach((campo)=>{
        if(campo.value=='' && campo.type!='password'){
            campo.value=campo.placeholder
        }else if (campo.type=='password' && campo.value==''){
            campo.value=passwordUser;
        }
    })

    let objeto={
        id:id,
        name:campos[0].value, 
        lastname:campos[1].value,
        email:campos[2].value,
        fechaNacimiento:campos[3].value,
        ciudadResidencia:campos[4].value,
        paisResidencia:campos[5].value,
        password:campos[6].value,
        repetirPassword:campos[7].value,

    }

    let usuarios=JSON.parse(localStorage.getItem('usuarios'));
    let usuarios2=usuarios.filter((u)=>u.id!=id);
    usuarios2.splice(id,0,objeto);
    localStorage.setItem('usuarios',JSON.stringify(usuarios2))

    campos.forEach((campo)=>{
        if(campo.type!='submit'){
            campo.value=''
        }
    })

    nombre.placeholder=objeto.name;    
    apellido.placeholder=objeto.lastname;    
    correo.placeholder=objeto.email;
    fecha.placeholder=objeto.fechaNacimiento;
    pais.placeholder=objeto.paisResidencia;
    ciudad.placeholder=objeto.ciudadResidencia;
    password.placeholder='';
    repeatpassword.placeholder='';

})