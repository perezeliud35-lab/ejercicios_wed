const inputkm = document.getElementById('celsius');
const inputmilla = document.getElementById('fahrenheit');
const btnConvertir = document.getElementById('btnConvertir');
const mensajeError = document.getElementById('mensajeError');

btnConvertir.addEventListener('click', function () {

    const valorkm = inputkm.value.trim();

    if (valorkm === '') {
        mostrarError('Por favor ingresa un valor en Kilómetros.');
        return;
    }

    if (isNaN(valorkm)) {
        mostrarError('El valor ingresado debe ser numérico.');
        return;
    }

    limpiarError();

    const Kilometros = parseFloat(valorkm);
    const millas = Kilometros * 0.621371;

    inputmilla.value = millas.toFixed(2) + ' millas';
});

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    inputmilla.value = '';
}

function limpiarError() {
    mensajeError.textContent = '';
}