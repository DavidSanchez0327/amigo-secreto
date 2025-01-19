// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let jugadoresAmigoSecreto = [];
let listaNumerosSorteados = [];
function agregarAmigo() {
    let amigo = document.getElementById("amigo");
    console.log(amigo.value);
    if (amigo.value == "") {
        alert("No puede agregar datos vacios");
        return;
    } else {
        jugadoresAmigoSecreto.push(amigo.value);
        limpiarTexto();
        mostrarParticipantes();
    }

}

function mostrarParticipantes() {
    let listado = document.querySelector("#listaAmigos");
    listado.innerHTML = jugadoresAmigoSecreto.map(amigo => `<li>${amigo}</li>`).join("");
}


function limpiarTexto() {
    document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
    let numeroGenerado = Math.floor((Math.random() * jugadoresAmigoSecreto.length));

    validarAmigosRestantes(numeroGenerado);
    mostrarParticipantes();
}

function validarAmigosRestantes(numeroGenerado) {
    if (jugadoresAmigoSecreto.length == listaNumerosSorteados.length) {
        alert('Ya se sortearon los participantes posibles');
        return;
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return sortearAmigo();
        } else {

            listaNumerosSorteados.push(numeroGenerado);
            let amigoSecreto = jugadoresAmigoSecreto[numeroGenerado];
            delete jugadoresAmigoSecreto[numeroGenerado];
            let resultado = document.querySelector("#resultado");
            resultado.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;
        }
    }
}