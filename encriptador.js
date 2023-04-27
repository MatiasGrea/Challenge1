const letras = ["e","i","a","o","u"];
const letrasn = ["enter","imes","ai","ober","ufat"];
function cambiodeletras(){
	let texto = document.getElementById('ingresetexto').value;
	let nuevotexto = texto.replaceAll(letras[0],letrasn[0]);
		nuevotexto = nuevotexto.replaceAll(letras[1],letrasn[1]);
		nuevotexto = nuevotexto.replaceAll(letras[2],letrasn[2]);
		nuevotexto = nuevotexto.replaceAll(letras[3],letrasn[3]);
		nuevotexto = nuevotexto.replaceAll(letras[4],letrasn[4]);
        document.getElementById('yaencriptado').value = nuevotexto;
        console.log(nuevotexto)
   
}
function cambioscript(){
	let texto = document.getElementById('ingresetextoen').value;
	let nuevotexto = texto.replaceAll(letrasn[0],letras[0]);
		nuevotexto = nuevotexto.replaceAll(letrasn[1],letras[1]);
		nuevotexto = nuevotexto.replaceAll(letrasn[2],letras[2]);
		nuevotexto = nuevotexto.replaceAll(letrasn[3],letras[3]);
		nuevotexto = nuevotexto.replaceAll(letrasn[4],letras[4]);
        document.getElementById('desencriptado').value = nuevotexto;
        console.log(nuevotexto)
    }
function copiardes(){
	let copy = document.getElementById('yaencriptado');
	copy.select();
	document.execCommand("copy");
	alert("Texto encriptado copiado");
 }
 function copiaren(){
	let copy = document.getElementById('desencriptado');
	copy.select();
	document.execCommand("copy");
	alert("Texto desencriptado copiado");
 }
