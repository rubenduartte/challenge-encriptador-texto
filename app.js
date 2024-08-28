const textArea = document.querySelector("#textoIngresado");
const mensaje = document.querySelector("#textoSalida"); //Campos para trabajar


/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
console.table(matrizCodigo);
stringEncriptada = stringEncriptada.toLowerCase();

    for(i=0 ; i<matrizCodigo.length ; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1])

        }
    }
    return stringEncriptada;
}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
    console.table(matrizCodigo);
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
        for(i=0 ; i<matrizCodigo.length ; i++) {
            if(stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
    
            }
        }
        return stringDesencriptada;
    }

function botonCopiar(){
    portapapeles()
}

function portapapeles(){
    navigator.clipboard.writeText(mensaje.value);
    alert('Se ha copiado con éxito!!!');
}

