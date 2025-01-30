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
