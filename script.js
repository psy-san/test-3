const container = document.getElementById("container");

// TESTE SIMPLES
console.log("JS carregou");

// PERSONAGENS (correto)
const personagens = [
    { nome: "Poppy", descricao: "Misteriosa", imagem: "https://via.placeholder.com/200" },
    { nome: "Chef", descricao: "Cozinheiro", imagem: "https://via.placeholder.com/200" },
    { nome: "Biggie", descricao: "Gigante", imagem: "https://via.placeholder.com/200" },
    { nome: "Vex", descricao: "Demônio ", imagem: "https://via.placeholder.com/200" }
];

// CRIAR CARDS
personagens.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${p.imagem}">
        <h2>${p.nome}</h2>
        <p>${p.descricao}</p>
    `;

    container.appendChild(card);
});


const particlesContainer = document.querySelector('.particles');

if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
        let span = document.createElement('span');

        span.style.left = Math.random() * 100 + "vw";
        span.style.animationDuration = (Math.random() * 5 + 5) + "s";
        span.style.width = span.style.height = (Math.random() * 3 + 2) + "px";

        particlesContainer.appendChild(span);
    }
}

card.style.setProperty("--glow", cores[i]);
card.style.setProperty("--color", cores[i]);
card.style.setProperty("--aura", cores[i]);

card.style.border = `2px solid ${cores[i]}`;
card.style.boxShadow = `0 0 15px ${cores[i]}`;