const imagen = document.getElementById('logo');
        imagen.addEventListener('mouseenter', () =>{
            imagen.style.transition = '0.3s'
            imagen.style.transform = 'scale(1.2)';
        });

    imagen.addEventListener('mouseleave', () => {
        imagen.style.transform = 'scale(1)';
    })

const links = document.querySelectorAll('.nav-item'); 
    links.forEach((links) => {
        links.addEventListener('mouseenter', () =>{
            links.style.transition = '0.3s'
            links.style.transform = 'scale(1.2) translateX(10px)';

        });
    });
    links.forEach((links) =>{
        links.addEventListener('mouseleave', () => {
        links.style.transform = 'scale(1) translateX(0px)';
    })
});
const imagenesLugares = document.querySelectorAll('#lugares figure img, #barrios figure img');

const visor = document.createElement('div');
visor.id = 'visor-imagen';

const imagenGrande = document.createElement('img');

const botonCerrar = document.createElement('button');
botonCerrar.id = 'cerrar-visor';
botonCerrar.textContent = 'x';

visor.appendChild(botonCerrar);
visor.appendChild(imagenGrande);

document.body.appendChild(visor);

imagenesLugares.forEach((imagen) => {
    imagen.style.cursor = 'pointer';

    imagen.addEventListener('click', () => {
        imagenGrande.src = imagen.src;
        imagenGrande.alt = imagen.alt;

        visor.style.display = 'flex';
    });
});

botonCerrar.addEventListener('click', () => {
    visor.style.display = 'none';
});

visor.addEventListener('click', (evento) => {
    if (evento.target === visor) {
        visor.style.display = 'none';
    }
});

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
        visor.style.display = 'none';
    }
});

/*VALIDACIÓN DEL FORMULARIO */

const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje-formulario");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Se ejecutó el submit");
    if (formulario.checkValidity()) {
        mensaje.textContent = "¡Solicitud completada correctamente!";
        mensaje.style.color = "#55ead4";
        formulario.reset();
        campos.forEach(function(campo) {
            campo.classList.remove("campo-completo");
        });
    } else {
        mensaje.textContent = "Revisá los campos obligatorios.";
        mensaje.style.color = "#ff6b6b";
        formulario.reportValidity();
    }
});

/* CAMBIO DE COLOR DE LOS CAMPOS */

const campos = document.querySelectorAll(
    '#formulario input, #formulario textarea, #formulario select'
);

campos.forEach(function(campo) {
    function actualizarColor() { if (campo.value.trim() !== "") { campo.classList.add("campo-completo"); } else { campo.classList.remove("campo-completo"); } }
    campo.addEventListener("input", actualizarColor);
    campo.addEventListener("change", actualizarColor);
    actualizarColor();
});

