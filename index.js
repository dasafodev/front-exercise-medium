const hideButton = document.getElementById('hide-modal');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');

// Evento que permite ocultar el modal cuando se seleccione el boton 'Si'
hideButton.addEventListener('click',(event)=> {
    modal.style.animation = 'modalOut .8s forwards';
    overlay.classList.remove('active');
});

//Evento que permite mostrar el modal cuando se selccione el menu de navegacion
menu.addEventListener('click',(event) => {
    console.log(event)
    modal.style.animation = 'modalIn .8s forwards';

    overlay.classList.add('active')
})