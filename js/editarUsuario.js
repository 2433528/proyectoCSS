let usuario=JSON.parse(localStorage.getItem('user'))
 console.log(usuario)
if (usuario){
    const {name,lastname,email,fechaNacimiento,ciudadResidencia,paisResidencia}=usuario[0];
      
    let nombre=document.querySelector('#nombre');
    nombre.placeholder=name;

    let apellido=document.querySelector('#lastname');
    apellido.placeholder=lastname;

    let correo=document.querySelector('#email');
    correo.placeholder=email;

    let fecha=document.querySelector('#fechaNacimiento');
    fecha.placeholder=fechaNacimiento;
    
    let ciudad=document.querySelector('#pais');
    ciudad.placeholder=ciudadResidencia;

    let pais=document.querySelector('#ciudad');
    pais.placeholder=paisResidencia;

}

