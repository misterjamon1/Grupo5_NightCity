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
const imagenesLugares = document.querySelectorAll('#lugares figure img');

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
