function encriptar(){
    //Declaración de variables
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen-texto");
    let textoCifrado = texto.replace(/e/ig, "enter").replace(/i/ig, "imes").replace(/a/ig, "ai").replace(/o/ig, "ober").replace(/u/ig, "ufat");
    //Computos
    if(texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto cifrado con exito :)";
        parrafo.textContent = "Tu texto se encuentra donde lo esrcibiste";
        imagen.src = "./imagenes/encriptado.png";
    }
    else{
        imagen.src = "./imagenes/searchengin.svg";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Ingrese un texto");
    }
}
function desEncriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen-texto");
    let textoCorrecto = texto.replace(/enter/ig, "e").replace(/imes/ig, "i").replace(/ai/ig, "a").replace(/ober/ig, "o").replace(/ufat/ig, "u");
    //computos
    if(texto.length != 0){
        document.getElementById("texto").value = textoCorrecto;
        tituloMensaje.textContent = "Texto desencriptado con exito :)";
        parrafo.textContent = "Tu texto se encuentra donde lo esrcibiste";
        imagen.src = "./imagenes/desencriptado.png";
    }
    else{
        imagen.src = "./imagenes/searchengin.svg";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Ingrese un texto");
    }
}