const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');
const mensajeVacio = document.getElementById('mensajeVacio');


function actualizarMensajeVacio() {
    if (lista.children.length === 0) {
        mensajeVacio.style.display = 'block';
    } else {
        mensajeVacio.style.display = 'none';
    }
}


function agregarElemento() {
    const texto = input.value.trim(); 

    if (texto !== '') {
        const li = document.createElement('li');

        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo); 

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-sm', 'btn-danger');

        botonEliminar.addEventListener('click', function () {
            li.remove();
            actualizarMensajeVacio();
        });

        li.appendChild(botonEliminar);

        lista.appendChild(li);

        input.value = '';
        input.focus();

        actualizarMensajeVacio();
    } else {
        alert('Escribe algo para agregar a la lista.');
    }
}

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        agregarElemento();
    }
});

actualizarMensajeVacio();
