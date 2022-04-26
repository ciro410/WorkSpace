const inputsCounts = document.querySelectorAll('.counts input');

inputsCounts.forEach(input => {
    input.addEventListener('change' ,  function(event){
        const inputModificado = event.target
        if (inputModificado.value && inputModificado.value === inputModificado.dataset.resposta){
            inputModificado.classList.add('acerto')
        }else{
            inputModificado.classList.add('erro')
        }
    })
});