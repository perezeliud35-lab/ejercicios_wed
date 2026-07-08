const inputCelsius = document.getElementById('celsius');
const inputFahrenheit = document.getElementById('fahrenheit');
const btnConvertir = document.getElementById('btnConvertir');
const mensajeError = document.getElementById('mensajeError');

btnConvertir.addEventListener('click', function () {

    const valorCelsius = inputCelsius.value.trim();

    if (valorCelsius === '') {
        mostrarError('Por favor ingresa un valor en grados Celsius.');
        return;
    }

    if (isNaN(valorCelsius)) {
        mostrarError('El valor ingresado debe ser numérico.');
        return;
    }

    limpiarError();

    const celsius = parseFloat(valorCelsius);
    const fahrenheit = (celsius * 9 / 5) + 32;

    inputFahrenheit.value = fahrenheit.toFixed(2) + ' °F';
});

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    inputFahrenheit.value = '';
}

function limpiarError() {
    mensajeError.textContent = '';
}
