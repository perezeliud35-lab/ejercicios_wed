const inputCelsius = document.getElementById('celsius');
const inputFahrenheit = document.getElementById('fahrenheit');
const btnConvertir = document.getElementById('btnConvertir');
const mensajeError = document.getElementById('mensajeError');

const tasaDeCambio = 0.058;

btnConvertir.addEventListener('click', function () {

    const valorCelsius = inputCelsius.value.trim();

    if (valorCelsius === '') {
        mostrarError('Por favor ingresa un valor en Pesos Mexicanos.');
        return;
    }

    if (isNaN(valorCelsius)) {
        mostrarError('El valor ingresado debe ser numérico.');
        return;
    }

    limpiarError();

    const MXN = parseFloat(valorCelsius);
    const USD = MXN * tasaDeCambio;

    inputFahrenheit.value = USD.toFixed(2) + ' USD';
});

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    inputFahrenheit.value = '';
}

function limpiarError() {
    mensajeError.textContent = '';
}