const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const btnAgregar = document.getElementById('btnAgregar');
const btnCalcular = document.getElementById('btnCalcular');
const listaEstudiantes = document.getElementById('listaEstudiantes');
const inputPromedio = document.getElementById('promedio');
const inputMasAlta = document.getElementById('masAlta');
const inputMasBaja = document.getElementById('masBaja');
const mensajeError = document.getElementById('mensajeError');

let estudiantes = [];

btnAgregar.addEventListener('click', function () {

    const nombre = inputNombre.value.trim();
    const calificacionTexto = inputCalificacion.value.trim();

    if (nombre === '' || calificacionTexto === '') {
        mostrarError('Ingresa el nombre y la calificación del estudiante.');
        return;
    }

    const calificacion = Number(calificacionTexto);
    if (isNaN(calificacion)) {
        mostrarError('La calificación debe ser un número válido.');
        return;
    }

    limpiarError();

    const nuevoEstudiante = { nombre: nombre, calificacion: calificacion };
    estudiantes.push(nuevoEstudiante);

    inputNombre.value = '';
    inputCalificacion.value = '';
    inputNombre.focus();

    actualizarLista();
});

function actualizarLista() {
    listaEstudiantes.innerHTML = '';

    estudiantes.forEach(function (estudiante) {
        const item = document.createElement('li');
        item.textContent = estudiante.nombre + ' - ' + estudiante.calificacion;
        listaEstudiantes.appendChild(item);
    });
}

btnCalcular.addEventListener('click', function () {

    if (estudiantes.length === 0) {
        mostrarError('Agrega al menos un estudiante antes de calcular.');
        return;
    }

    limpiarError();

    const suma = estudiantes.reduce(function (total, estudiante) {
        return total + estudiante.calificacion;
    }, 0);
    const promedio = suma / estudiantes.length;

    const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    const estudianteMasAlto = estudiantes.find(e => e.calificacion === calificacionMaxima);
    const estudianteMasBajo = estudiantes.find(e => e.calificacion === calificacionMinima);

    inputPromedio.value = promedio.toFixed(2);
    inputMasAlta.value = estudianteMasAlto.nombre + ' (' + calificacionMaxima + ')';
    inputMasBaja.value = estudianteMasBajo.nombre + ' (' + calificacionMinima + ')';
});

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
}

function limpiarError() {
    mensajeError.textContent = '';
}
