
let usuario=JSON.parse(localStorage.getItem('user'));
let publicaciones=JSON.parse(localStorage.getItem('publicaciones'));
let contenedor;

if (usuario){
    contenedor=document.querySelector('#datosUsuario');
      const {name}=usuario[0];
      contenedor.innerHTML=`
      <ul class="list-group mb-4">
        <li class="list-group-item"><strong>Usuario:</strong> ${name}</li>
      </ul>
      <div id="lista" class="list-group"></div>
      `
}

if(publicaciones){
  let publicacion=publicaciones.filter((p)=>p.idUsuarioPub==usuario[0].id);
  let tabla=document.querySelector('#datosPublicaciones')
  publicacion.forEach(p => {
    tabla.innerHTML+=`
    <tr id="tr${p.id}">
      <td>${p.nombre}</td>
      <td>${p.fecha}</td>    
      <td><button id="b${p.id}" class="tr${p.id} ${p.id} bloquear btn btn-outline-dark me-2"><i class="fas fa-ban"></i></button></td>
      <td><button id="b${p.id}" class="tr${p.id} ${p.id} visualizar btn btn-outline-dark"><i class="fas fa-glasses"></i></button></td>    
    </tr>
    `
  });
}


let bloquear=document.querySelectorAll('.bloquear');
let visualizar=document.querySelectorAll('.visualizar');
let bloqueado;

bloquear.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    let block=document.querySelector(`#${e.target.id}`).classList;
    if (!bloqueado){
      if(window.confirm("La publicación será bloqueada ¿Deseas continuar?")) {        
        document.querySelector(`#${block[0]}`).classList.toggle('bg-secondary');
        document.querySelector(`#${block[0]}`).classList.toggle('opacity-25');
        
        bloqueado=true;
      } 
    }else{
      document.querySelector(`#${block[0]}`).classList.toggle('bg-secondary');
      document.querySelector(`#${block[0]}`).classList.toggle('opacity-25');
      bloqueado=false;
    }
    
  });
})


visualizar.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    let identificador=document.querySelector(`#${e.target.id}`).classList;
    let publicacionesUsuario=publicaciones.filter((p)=>p.idUsuarioPub==usuario[0].id);
    let publicacion=publicacionesUsuario.filter((p)=>identificador[1]==p.id);
    console.log(publicacion[0].pagina); 
    location.href=`${publicacion[0].pagina}`;
  });
})