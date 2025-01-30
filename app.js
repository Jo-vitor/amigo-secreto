//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let campoAmigo = document.getElementById("amigo");

    if(campoAmigo.value == ""){
        alert("Por favor, insira um nome!");
    }

    amigos.push(campoAmigo.value);
    console.log(amigos);
    
    campoAmigo.value = "";
    
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");

        li.appendChild(document.createTextNode(amigo));

        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if(amigos.length == 0) {
        alert("Sem nomes na lista!");
    }

    let indiceAleatorio = parseInt(Math.random() * amigos.length);
    
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `O nome sorteado foi: ${amigos[indiceAleatorio]}`;
}