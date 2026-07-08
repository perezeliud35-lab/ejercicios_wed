
const inputNumeros = document.getElementById('numeros');
const inputMayor = document.getElementById('mayor');
const inputMenor = document.getElementById('menor');
const inputPromedio = document.getElementById('promedio');
const btnCalcular = document.getElementById('btnCalcular');
const mensajeError = document.getElementById('mensajeError');

btnCalcular.addEventListener('click', function () {

    const texto = inputNumeros.value.trim();

    if (texto === '') {
        mostrarError('Por favor ingresa al menos un número.');
        return;
    }

    const cadenas = texto.split(',');

    const numeros = cadenas.map(valor => Number(valor.trim()));

    const hayValorInvalido = numeros.some(valor => isNaN(valor) || valor === null);

    if (hayValorInvalido || cadenas.some(valor => valor.trim() === '')) {
        mostrarError('Ingresa solo números válidos, separados por comas.');
        return;
    }

    limpiarError();

    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);

    const suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
    const promedio = suma / numeros.length;

    inputMayor.value = mayor;
    inputMenor.value = menor;
    inputPromedio.value = promedio.toFixed(2);
});

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    inputMayor.value = '';
    inputMenor.value = '';
    inputPromedio.value = '';
}

function limpiarError() {
    mensajeError.textContent = '';
}