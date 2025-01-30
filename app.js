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
   
}