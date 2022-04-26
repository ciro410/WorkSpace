const input = document.querySelector('input');
const tarefas = document.querySelector('ul')


input.addEventListener('keydown', (event)=> {
    if( event.key !== 'Enter' || input.value === '' ) return
     
    const tarefa = document.createElement('li')
    const botao = document.createElement('button')
    const row = document.createElement ('div')

    row.classList.add('row')

    botao.textContent = 'X'
    tarefa.textContent = input.value;

    row.append(tarefa,botao)

    botao.addEventListener('click' , (event) =>{
        row.remove()
    })

    tarefa.addEventListener('click',() =>{
        tarefa.classList.toggle('feito')
    })
    tarefas.append(row);

    input.value = ''


})






 