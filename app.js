let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto)
{
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento()
{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroUsuario === numeroSecreto) {
        //El usuario acerto
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja()
{
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }
    else 
    {
        if (listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        } 
        else 
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales()
{
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Digita un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();