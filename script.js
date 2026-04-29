const personagens = [
    {
        nome: "Poppy",
        descricao: "Uma garota misteriosa com um sorriso inocente.",
        imagem: "img/poppy.png"
    },
    {
        nome: "Chef",
        descricao: "Especialista em pratos exóticos e perigosos.",
        imagem: "img/chef.png"
    },
    {
        nome: "Biggie",
        descricao: "Gigante forte com um coração surpreendentemente gentil.",
        imagem: "img/biggie.png"
    },
    {
        nome: "Luna",
        descricao: "Controla a luz da lua e os sonhos.",
        imagem: "img/luna.png"
    },
    {
        nome: "Rex",
        descricao: "Líder impulsivo com instinto de batalha.",
        imagem: "img/rex.png"
    },
    {
        nome: "Vex",
        descricao: "Demônio travesso que adora causar caos",
        imagem: "img/vex.png"
    },
    {
        nome: "Nova",
        descricao: "Manipula energia cósmica.",
        imagem: "img/nova.png"
    },
    {
        nome: "Zara",
        descricao: "Ágil e silenciosa como uma sombra.",
        imagem: "img/zara.png"
    },
    {
        nome: "Kai",
        descricao: "Mestre em artes marciais.",
        imagem: "img/kai.png"
    },
    {
        nome: "Milo",
        descricao: "Inventor excêntrico.",
        imagem: "img/milo.png"
    },
    {
        nome: "Iris",
        descricao: "Enxerga além da realidade.",
        imagem: "img/iris.png"
    },
    {
        nome: "Blaze",
        descricao: "Controla o fogo.",
        imagem: "img/blaze.png"
    },
    {
        nome: "Frost",
        descricao: "Poderes de gelo.",
        imagem: "img/frost.png"
    },
    {
        nome: "Echo",
        descricao: "Manipula o som.",
        imagem: "img/echo.png"
    },
    {
        nome: "Shadow",
        descricao: "Se move nas sombras.",
        imagem: "img/shadow.png"
    },
    {
        nome: "Bolt",
        descricao: "Velocidade absurda.",
        imagem: "img/bolt.png"
    },
    {
        nome: "Nyx",
        descricao: "Ligada à escuridão.",
        imagem: "img/nyx.png"
    },
    {
        nome: "Orion",
        descricao: "Guerreiro estelar.",
        imagem: "img/orion.png"
    },
    {
        nome: "Astra",
        descricao: "Manipula estrelas.",
        imagem: "img/astra.png"
    },
    {
        nome: "Drake",
        descricao: "Metade dragão.",
        imagem: "img/drake.png"
    }
];

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