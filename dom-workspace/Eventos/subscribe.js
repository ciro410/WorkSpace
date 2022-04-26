const botaoInscrever = document.querySelector('.btn');
const botaoConfirmar = document.querySelector('.confirmar')
const botoesModal = document.querySelectorAll('.modal  button')
const modal = document.querySelector('.modal')

botaoInscrever.addEventListener('click' , inscrever);

botoesModal.forEach(botao => {
    botao.addEventListener('click' ,function(){
        modal.classList.add('escondido')
    })
})

botaoConfirmar.addEventListener('click', function(){
    botaoInscrever.textContent = 'INSCREVER-SE'
    botaoInscrever.classList.remove('inscrito')
    botaoInscrever.addEventListener('click' , inscrever)
})

function inscrever(event){
    const botaoClicado = event.target;
    botaoClicado.textContent = 'INSCRITO'
    botaoClicado.classList.add('inscrito')
    modal.classList.add('escondido')

    botaoClicado.removeEventListener('click',inscrever);

    botaoClicado.addEventListener('click',function(){
        modal.classList.remove('escondido')
    });
}
    