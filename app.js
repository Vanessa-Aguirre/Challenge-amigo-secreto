// array para almacenar los nombres 
const listaAmigos = [];


//funcion para agregar un amigo 
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  
//validar que el campo no este vacio
  if(!inputAmigo.value){
    alert('Por favor, inserte un nombre');
  }
  //agregar el nombre a la lista de amigos 
listaAmigos.push(inputAmigo.value);
console.log(agregarAmigo);

actualizarLista();// actualizar la lista en el html
inputAmigo.value = " ";  // limpiar la cada donde se escribe el nombre 


}


// funcion para actualizar la lista de amigos en la pagina 
function actualizarLista(){
  const ulListaAmigos = document.getElementById("listaAmigos");
 ulListaAmigos.innerHTML = " "; // limpiar el contenido actual de la lista

 for (let i = 0; i < listaAmigos.length; i++) {
  const nuevoAmigo = document.createElement('li');
  nuevoAmigo.textContent = listaAmigos[i];
  ulListaAmigos.appendChild(nuevoAmigo)
 }
return; 
  
}

// funcion para seleccionar un amigo aleatoriamente 
function sortearAmigo(){

  if(listaAmigos.length >0){
    const indiceAleatorio = listaAmigos [math.floorMath.random()*listaAmigos.length];//generar un numero aleatorio 
    //const amigoSecreto = listaAmigos[indiceAleatorio];// usa un indice aleatorio para obtener un nombre del array

    const ulResultado = document.getElementById("resultado");// mostrar el resultado en el HTML

   ulResultado.innerHTML =`El amigo secreto es:<strong> ${indiceAleatorio}</strong>`; //mostrar resultado en la interfaz

  }else{
    alert ('No hay amigos para sortear ');
   }
   
    }  
 














    

