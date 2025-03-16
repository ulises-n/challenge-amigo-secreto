
let amigos = [];


function agregarAmigo() {
   
    const amigoInput = document.getElementById('amigo');
    const nombreAmigo = amigoInput.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);

    amigoInput.value = "";

    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}
