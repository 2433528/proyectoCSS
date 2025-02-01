
let usuario=JSON.parse(localStorage.getItem('user'));
let publicaciones=JSON.parse(localStorage.getItem('publicaciones'));
let contenedor;
 console.log(usuario)
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
  console.log(publicacion);
  let lista=document.querySelector('#lista')
  publicacion.forEach(p => {
    lista.innerHTML+=`
    <a href=${p.pagina} class="list-group-item list-group-item-action bg-light">${p.nombre}</a>
    `
  });
}
