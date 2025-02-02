// Simulación de estados de conexión para múltiples usuarios
const usuarios = [
    { nombre: 'Usuario1', conectadoFivem: true, conectadoDiscord: false },
    { nombre: 'Usuario2', conectadoFivem: false, conectadoDiscord: true },
    { nombre: 'Usuario3', conectadoFivem: false, conectadoDiscord: false }
];

const estadoDiv = document.getElementById('estado-usuarios');

usuarios.forEach(usuario => {
    let estado = '';

    if (usuario.conectadoFivem) {
        estado = `<span class="punto-verde"></span>${usuario.nombre} Conectado a FiveM`;
        estadoDiv.innerHTML += `<div class="usuario-conectado-fivem">${estado}</div>`;
    } else if (usuario.conectadoDiscord) {
        estado = `${usuario.nombre} Conectado a Discord`;
        estadoDiv.innerHTML += `<div class="usuario-conectado-discord">${estado}</div>`;
    } else {
        estado = `${usuario.nombre} Desconectado`;
        estadoDiv.innerHTML += `<div class="usuario-desconectado">${estado}</div>`;
    }
});