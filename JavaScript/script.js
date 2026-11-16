const articulo = document.querySelectorAll('.articulos'); /*Sirve para que los articulos se agranden sin necesidad de deformar el texto*/
    articulo.forEach((articulo) => {
        articulo.addEventListener('mouseenter', () =>{
            articulo.style.transition = '0.3s'
            articulo.style.transform = 'scale(1.1)';
        });
    });
    articulo.forEach((articulo) =>{
        articulo.addEventListener('mouseleave', () => {
        articulo.style.transform = 'scale(1)';
    })
});

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