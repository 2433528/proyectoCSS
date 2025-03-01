let usuarios=JSON.parse(localStorage.getItem('usuarios'));
let publicaciones=JSON.parse(localStorage.getItem('publicaciones'));
let contenedor;
let usuario;



if(publicaciones){
    let tabla=document.querySelector('#table')

    publicaciones.forEach((p)=>{
        usuario=usuarios.filter((u)=>p.idUsuarioPub==u.id)
        tabla.innerHTML+=`
            <tr id="tr${p.id}">
                <td>${p.nombre}</td>
                <td>${usuario[0].name}</td>
                <td>${p.fecha}</td>    
                <td><button id="b${p.id}" class="tr${p.id} ${p.id} bloquear btn btn-outline-dark me-2">&#x1f6c7;</button></td>
                <td><button id="b${p.id}" class="tr${p.id} ${p.id} visualizar btn btn-outline-dark">&#x1f453;&#xfe0e;</button></td>    
            </tr>
            `
    })

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
      console.log(identificador)
      let publicacion=publicaciones.filter((p)=>identificador[1]==p.id);      
      location.href=`${publicacion[0].pagina}`;
    });
  })