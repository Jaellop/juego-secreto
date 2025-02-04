let numeroSecreto = generarNumeroSecreto ();
 let intentos = 1;
 let listaNumerosSorteados = [];
 //La lista queda inicializada en vacio
 let numeroMaximo = 10

     function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(intentos);
     if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p", `Acertaste  el numero en ${intentos} ${(intentos === 1)? "vez" : "veces" }`);
        document.getElementsByName("reiniciar").removeAttribute("disabled");

    } else {  

         if (numeroDeUsuario > numeroSecreto){  
             asignarTextoElemento ("p", "numero Secreto es menor");
         } else {  
             asignarTextoElemento ("p", "numero Secreto es mayor");
    
         }
         intentos++;
         limpiarCaja();
    
     }
     return;
   
      
 } 

    //alert("click desde el boton");
    //return;
    //getElementbyID me ayuda a obtener el input por ID, ya que no deseo que me traiga el objeto sino el valor que el usuario ingresa a la caja debo poner al final la palabra "valor"
    /*console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));*/
    //Haciendo esa comparacion entre los valores que me muestra la consola espero recibir un valor Boleano
    // Ya que parseInt me ayudo a hacer el valor de "numeroDeUsuario" igual a un numero puedo hacer uso del  === para comparar con el numero que arroja al azar el juego

 function limpiarCaja() {
 let valorCaja = document.querySelector("#valorUsuario");
 valorCaja.value = "";

 } 

    
  function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);
     //Preguntase si el numero esta en la lista, si esta en la lista entonces generar un nuevo numero
     //Si ya sorteamos todos los números 
     if( listaNumerosSorteados.length == numeroGenerado ){
        asignarTextoElemento("p", "ya se sortearon todos los número posibles");

   } else { 
     
         if(listaNumerosSorteados.includes(numeroGenerado)){
             return generarNumeroSecreto();
           //Recursividad
          } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

         }
    }
}
    
    // return Math.floor(Math.random()*10)+1;
    //let numeroSecreto = Math.floor(Math.random()*10)+1;
    //return numeroSecreto;
    //Ya que tener dos funciones con let numeroSecreto crea confuciones es mejor quitar la variable y hacer el return de Math

   
  

  function condicionesIniciales(){
    //Indicar mensaje de intervalo de números
    asignarTextoElemento("h1", "juego del numero secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    //Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto ();
     //Inicializar el número intentos
     intentos++;


  }

  function reiniciarJuego() {
    //limpiar caja
     limpiarCaja();
     condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true")

  }

 function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

 }

condicionesIniciales();


