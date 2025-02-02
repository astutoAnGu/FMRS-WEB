const cards = [
    {
        title: "BANDO PERSONALIZADO",
        description: "Crea tu propio bando para unirte a la batalla de una forma exclusiva.",
        fondo: "/images/fondocarta1.png",
        link: "bando_personalizadotienda.html" // Enlace correspondiente
    },
    {
        title: "PEDS",
        description: "Utiliza personajes ya creados por el juego con lore propio.",
        fondo: "/images/fondocarta2.png",
        link: "pedstienda.html" // Enlace correspondiente
    },
    {
        title: "VEHICULOS",
        description: "Si deseas meter un vehículo add-on para únicamente y exclusivamente para tu bando personalizado puedes hacerlo por tan solo.",
        fondo: "/images/fondocarta3.png",
        link: "vehiculostienda.html" // Enlace correspondiente
    },
];

let currentIndex = 0;

function updateCard() {
    const cardElement = document.getElementById("card");

    // Desvanece la carta actual
    cardElement.style.opacity = 0;

    // Espera a que termine la transición de desvanecimiento
    setTimeout(() => {
        // Actualiza el contenido de la carta
        cardElement.innerHTML = `
            <h2><strong>${cards[currentIndex].title}</strong></h2>
            <p><strong><em>${cards[currentIndex].description}</em></strong></p>
        `;

        // Cambia el fondo de la carta
        cardElement.style.backgroundImage = `url(${cards[currentIndex].fondo})`;
        cardElement.style.backgroundSize = 'cover'; // Asegura que la imagen cubra el área de la carta
        cardElement.style.backgroundPosition = 'center'; // Centra la imagen de fondo

        // Vuelve a mostrar la carta
        cardElement.style.opacity = 1; // Restaura la opacidad

        // Asocia el evento al botón dentro de la tarjeta
        document.getElementById("cardActionButton").addEventListener("click", () => {
            window.location.href = cards[currentIndex].link; // Redirige a la página correspondiente
        });
    }, 500); // Debe coincidir con la duración de la transición en CSS
}

// Evento para el botón "prev"
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Mueve al índice anterior
    updateCard();
});

// Evento para el botón "next"
document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length; // Mueve al índice siguiente
    updateCard();
});

// Inicializa la primera carta
updateCard();