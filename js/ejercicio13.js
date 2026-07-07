const inputEdad = document.getElementById('edad');
const inputResultado = document.getElementById('resultado');
const btnVerificar = document.getElementById('btnVerificar');
const mensajeError = document.getElementById('mensajeError');

btnVerificar.addEventListener('click', function () {

    const valorEdad = inputEdad.value.trim();

    // Validar que no esté vacío
    if (valorEdad === '') {
        mostrarError('Por favor ingresa tu edad.');
        return;
    }

    // Validar que sea numérico
    if (isNaN(valorEdad)) {
        mostrarError('El valor ingresado debe ser numérico.');
        return;
    }

    const edad = parseFloat(valorEdad);

    // Validar que sea un número positivo
    if (edad < 0) {
        mostrarError('La edad debe ser un número positivo.');
        return;
    }

    limpiarError();

    // Evaluar si puede votar
    if (edad >= 18) {
        inputResultado.value = 'Puedes votar';
    } else {
        inputResultado.value = 'No puedes votar';
    }
});

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    inputResultado.value = '';
}

function limpiarError() {
    mensajeError.textContent = '';
}