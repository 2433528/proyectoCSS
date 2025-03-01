
let usuarios;
let user;
let publicaciones;
let eliminar;
let bloquear;
let editar;

/* Creacion dinámica de la tabla */

const tabla=document.querySelector('#usersTable')

function crearTabla(){
    usuarios=JSON.parse(localStorage.getItem('usuarios')); 
    if(usuarios && tabla){
        usuarios.forEach((usuario)=>{
            const {id,name,lastname}=usuario;
            tabla.innerHTML +=`
                <tr id="tr${id}">
                    <td id="td${id}" class="nombre align-middle">${name} ${lastname}</td>                                        
                    <td><button id="b${id}" class="tr${id} ${id} bloquear btn btn-outline-dark"><i class="fas fa-ban"></i></button></td>
                    <td><button id="b${id}" class="tr${id} ${id} modificar btn btn-outline-dark"><i class="fas fa-pencil"></i></button></td>
                    <td><button id="b${id}" class="tr${id} ${id} publicaciones btn btn-outline-dark"><i class="fas fa-book-open"></i></button></td>
                    <td><button id="b${id}" class="tr${id} ${id} eliminar btn btn-outline-dark"><i class="fas fa-xmark"></i></button></td> 
                </tr>
          `    
        })
    }
}


/* Funciones para obtener los datos    */

function obtenerDatos(){
  usuarios=JSON.parse(localStorage.getItem('usuarios')); 
    if (!usuarios){
        usuarios=[
            {
              "id": 0,
              "name": "Leanne",
              "lastname": "Graham",
              "email": "Sincere@april.biz",
              "fechaNacimiento":"03-02-1990",
              "paisResidencia":"Gwenborough",
              "ciudadResidencia":"Gwenborough",
              "password":"user0",
              "repetirPassword":"user0",
            },
            {
              "id": 1,
              "name": "Ervin",
              "lastname": "Howell",
              "email": "Shanna@melissa.tv",
              "fechaNacimiento":"20-05-1980",
              "paisResidencia":"Wisokyburgh",
              "ciudadResidencia":"Wisokyburgh",
              "password":"user1",
              "repetirPassword":"user1",       
            },
            {
              "id": 2,
              "name": "Clementine",
              "lastname": "Bauch",
              "email": "Nathan@yesenia.net",
              "fechaNacimiento":"30-06-1995",
              "paisResidencia":"Gwenborough",
              "ciudadResidencia":"Gwenborough",
              "password":"user2",
              "repetirPassword":"user2",        
            },
            {
              "id": 3,
              "name": "Patricia",
              "lastname": "Lebsack",
              "email": "Julianne.OConner@kory.org",
              "fechaNacimiento":"30-10-1982",
              "paisResidencia":"South Elvis",
              "ciudadResidencia":"South Elvis",
              "password":"user3",
              "repetirPassword":"user3",       
            },
            {
              "id": 4,
              "name": "Chelsey",
              "lastname": "Dietrich",
              "email": "Lucio_Hettinger@annie.ca",
              "fechaNacimiento":"26-12-1994",
              "paisResidencia":"Roscoeview",
              "ciudadResidencia":"Roscoeview",
              "password":"user4",
              "repetirPassword":"user4",         
            },
            {
              "id": 5,
              "name": "Dennis",
              "lastname": "Schulist",
              "email": "Karley_Dach@jasper.info",
              "fechaNacimiento":"5-05-1991",
              "paisResidencia":"South Christy",
              "ciudadResidencia":"South Christy",
              "password":"user5",
              "repetirPassword":"user5",         
            },
            {
              "id": 6,
              "name": "Kurtis ",
              "lastname": "Weissnat",
              "email": "Telly.Hoeger@billy.biz",
              "fechaNacimiento":"5-05-1991",
              "paisResidencia":"Howemouth",
              "ciudadResidencia":"Howemouth",
              "password":"user6",
              "repetirPassword":"user6",       
            },
            {
              "id": 7,
              "name": "Nicholas ",
              "lastname": "Runolfsdottir",
              "email": "Sherwood@rosamond.me",
              "fechaNacimiento":"10-04-1998",
              "paisResidencia":"Howemouth",
              "ciudadResidencia":"Howemouth",
              "password":"user7",
              "repetirPassword":"user7",       
            },
            {
              "id": 8,
              "name": "Glenna",
              "lastname": "Reichert",
              "email": "Chaim_McDermott@dana.io",
              "fechaNacimiento":"20-04-1979",
              "paisResidencia":"Bartholomebury",
              "ciudadResidencia":"Bartholomebury",
              "password":"user8",
              "repetirPassword":"user8",      
            },
            {
              "id": 9,
              "name": "Clementina",
              "lastname": "DuBuque",
              "email": "Rey.Padberg@karina.biz",
              "fechaNacimiento":"10-12-1983",
              "paisResidencia":"Lebsackbury",
              "ciudadResidencia":"Lebsackbury",
              "password":"user9",
              "repetirPassword":"user9",        
            }
          ]
        localStorage.setItem('usuarios',JSON.stringify(usuarios));
        crearTabla();
      }else{
        usuarios=JSON.parse(localStorage.getItem('usuarios'));
        crearTabla();  
      }
}


let publicacion=JSON.parse(localStorage.getItem('publicaciones'));

function obtenerPublicaciones(){
  if (!publicaciones){
    publicaciones=[
        {
          id:0,
          nombre:'Formatos de imagenes',
          idUsuarioPub:'2',
          pagina:'publicacionImagenesWeb.html',
          fecha:'02/02/2025'
        },
        {
          id:1,
          nombre:'Propiedades imagenes CSS',
          idUsuarioPub:'2',
          pagina:'publicacionPropiedades.html',
          fecha:'01/01/2025'
        },
        {
          id:2,
          nombre:'Filtros en CSS',
          idUsuarioPub:'8',
          pagina:'publicacionFiltros.html',
          fecha:'25/01/2025'
        },
      ]
    localStorage.setItem('publicaciones',JSON.stringify(publicaciones));
  }else{
    publicaciones=JSON.parse(localStorage.getItem('publicaciones'));
  }
}

obtenerDatos();
obtenerPublicaciones();


/* Control de los distintos botones */


bloquear=document.querySelectorAll('.bloquear');
eliminar=document.querySelectorAll('.eliminar');
editar=document.querySelectorAll('.modificar');
publicaciones=document.querySelectorAll('.publicaciones');
let bloqueado;

bloquear.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      let block=document.querySelector(`#${e.target.id}`).classList;
      if (!bloqueado){
        console.log(block.contains('bg-secondary'))
        if(window.confirm("El usuario será bloqueado ¿Deseas continuar?")) {        
          document.querySelector(`#${block[0]}`).classList.toggle('bg-secondary');
          document.querySelector(`#${block[0]}`).classList.toggle('opacity-25');
          const alerta=document.querySelector('.alerta');
            alerta.innerHTML=`
              <div class="alert alert-info alert-dismissible" role="alert">
                <div>EL usuario ha sido bloqueado</div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
          `
          bloqueado=true;
        } 
      }else{
        document.querySelector(`#${block[0]}`).classList.toggle('bg-secondary');
        document.querySelector(`#${block[0]}`).classList.toggle('opacity-25');
        bloqueado=false;
      }
      
    });
})

eliminar.forEach((btn)=>{
   
    btn.addEventListener('click',(e)=>{
      if(window.confirm("El usuario será borrado ¿Deseas continuar?")) {
        let rm=document.querySelector(`#${e.target.id}`).classList;
        const alerta=document.querySelector('.alerta');
        alerta.innerHTML=`
          <div class="alert alert-danger alert-dismissible" role="alert">
            <div>EL usuario ha sido borrado de forma permanente</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `
        usuarios=usuarios.filter(u=>u.id!=rm[1]);
        document.querySelector(`#${rm[0]}`).remove();   
        localStorage.setItem('usuarios',JSON.stringify(usuarios));
      }
    });
})


editar.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
      let users=JSON.parse(localStorage.getItem('usuarios'));
      console.log(usuarios)
      let identificador=document.querySelector(`#${e.target.id}`).classList;
      user=users.filter((u)=>u.id==identificador[1]);
      localStorage.setItem('user',JSON.stringify(user));
      location.href="editarUsuario.html";
  });
})


publicaciones.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    let users=JSON.parse(localStorage.getItem('usuarios'));
    console.log(usuarios)
    let identificador=document.querySelector(`#${e.target.id}`).classList;
    user=users.filter((u)=>u.id==identificador[1]);
    localStorage.setItem('user',JSON.stringify(user));
    location.href="publicacionUsuario.html";
  });
})

