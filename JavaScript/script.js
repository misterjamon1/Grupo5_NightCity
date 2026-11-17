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