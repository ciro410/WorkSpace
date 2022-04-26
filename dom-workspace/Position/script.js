const imagensGaleria = document.querySelectorAll( '.container img');
const imagemModal = document.querySelector('.modal img');
const modal = document.querySelector('.modal')
const linkModal = document.querySelector('.modal a')


function abrirModal( src){
    imagemModal.src = src;
    linkModal.href= src
    modal.style.display = 'flex'
}


imagensGaleria.forEach((imagem) => {
    imagem.addEventListener('click',(event)=>{
        abrirModal(event.target.src)
        
    })
})


modal.addEventListener('click', () => {
        modal.style.display = 'none';
})

linkModal.addEventListener('click',(event)=>{
    event.stopPropagation();
})