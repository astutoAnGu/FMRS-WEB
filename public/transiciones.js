document.getElementById("tienda").addEventListener("click", function() {
    // Añadir la clase 'hidden' para desvanecer la página actual
    document.body.classList.add("hidden");

    // Esperar a que termine la transición
    setTimeout(function() {
        // Redirigir a la nueva página
        window.location.href = "tienda.html";
    }, 500); // Debe coincidir con la duración de la transición en CSS
});

function goBack() {
    // Añadir la clase 'hidden' para desvanecer la página actual
    document.body.classList.add("hidden");

    // Esperar a que termine la transición
    setTimeout(function() {
        // Redirigir a la página anterior
        window.history.back();
    }, 500); // Debe coincidir con la duración de la transición en CSS
}