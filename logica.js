/*function Cifrar(letra) {
    /*if (letra == "a") {
        cifrado = letra.replace(letra, "ai")
        return cifrado;
        //console.log(cifrado);
    } else if (letra == "e") {
        cifrado = letra.replace(letra, "enter")
        return cifrado
        //console.log(cifrado);
    } else if (letra == "i") {
        cifrado = letra.replace(letra, "imes")
        return cifrado
        //console.log(cifrado);
    } else if (letra == "o") {
        cifrado = letra.replace(letra, "ober")
        return cifrado
        //console.log(cifrado);
    } else if (letra == "u") {
        cifrado = letra.replace(letra, "ufat")
        return cifrado
        //console.log(cifrado);
    } else {
        return letra
        //console.log(letra);
    }*/

/*switch (letra) {
    case "a":
        cifrado = letra.replace(letra, "ai")
        return cifrado;
    case "e":
        cifrado = letra.replace(letra, "enter")
        return cifrado;
    case "i":
        cifrado = letra.replace(letra, "imes")
        return cifrado;
    case "o":
        cifrado = letra.replace(letra, "ober")
        return cifrado;
    case "u":
        cifrado = letra.replace(letra, "ufat")
        return cifrado;
    default:
        return letra;
}
}

function Encriptar(frase) {
nfrase = [];
for (i = 0; i < frase.length; i++) {
    caracter = frase.charAt(i);
    cifrado = Cifrar(caracter);
    nfrase.push(cifrado);
    //return nfrase;
    //console.log(nfrase);
    console.log(cifrado);
}
}

Encriptar("amigo");
//console.log(Encriptar("amigo"));*/

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = Encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoEncriptado = Desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    //mensaje.style.backgroundImage = "none";
}

function Encriptar(fraseEncriptada) {
    let matrizCifrado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //let matrizCifrado = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]; //! ¿Porque son diferentes?
    fraseEncriptada = fraseEncriptada.toLowerCase();

    for (i = 0; i < matrizCifrado.length; i++) {
        if (fraseEncriptada.includes(matrizCifrado[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(matrizCifrado[i][0], matrizCifrado[i][1])
        }
    }
    return fraseEncriptada;
}

function Desencriptar(fraseDesencriptada) {
    let matrizCifrado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //let matrizCifrado = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]; //! ¿Porque son diferentes?
    fraseDesencriptada = fraseDesencriptada.toLowerCase();

    for (i = 0; i < matrizCifrado.length; i++) {
        if (fraseDesencriptada.includes(matrizCifrado[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(matrizCifrado[i][1], matrizCifrado[i][0])
        }
    }
    return fraseDesencriptada;
}